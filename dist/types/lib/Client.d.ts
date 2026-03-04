import "./util/logging";
import type { DiscoveryType, ChannelCount, SubscriptionOptions, ChannelSelector, FileListItem } from "./types";
import type * as InstanceOptions from "./types/InstanceOptions";
import type { MeterData } from "./MeterServer";
import { MessageCode, type ConnectionState } from "./constants";
import MeterServer from "./MeterServer";
import CacheProvider from "./util/CacheProvider";
import * as FDHelper from "./util/fileRequestUtil";
type APIEventMap = {
    [_ in keyof typeof ConnectionState]: [];
} & {
    [_ in MessageCode]: [any];
} & {
    meter: [MeterData];
    data: [
        {
            code: MessageCode;
            data: any;
        }
    ];
};
export declare class Client {
    readonly serverHost: string;
    readonly serverPort: number;
    readonly options: Partial<InstanceOptions.InstanceOptions>;
    channelCounts: ChannelCount;
    meteringClient: Awaited<ReturnType<typeof MeterServer>>;
    private eventEmitter;
    private fileDataEmitter;
    private keepAliveHelper;
    readonly state: ReturnType<typeof CacheProvider>;
    private zlibData?;
    private conn;
    private connectPromise;
    constructor(address: InstanceOptions.ConnectionAddress, options?: Partial<InstanceOptions.InstanceOptions>);
    protected emit<K extends keyof APIEventMap>(event: K, ...data: APIEventMap[K]): this;
    on<K extends keyof APIEventMap>(event: K, listener: (...arg: APIEventMap[K]) => void): this;
    once<K extends keyof APIEventMap>(event: K, listener: (...arg: APIEventMap[K]) => void): this;
    off<K extends keyof APIEventMap>(event: K, listener: (...arg: APIEventMap[K]) => void): this;
    addListener<K extends keyof APIEventMap>(event: K, listener: (...arg: APIEventMap[K]) => void): this;
    removeListener<K extends keyof APIEventMap>(event: K, listener: (...arg: APIEventMap[K]) => void): this;
    /**
     * Extracts the data structure and cache layer
     * @internal
     */
    dumpState(): any;
    /**
     * @param timeout Default 10s
     */
    static discover(timeout?: number): Promise<DiscoveryType[]>;
    /**
     * Subscribe to the metering data
     */
    meterSubscribe(port?: number): Promise<void>;
    /**
     * Unsubscribe from the metering data
     */
    meterUnsubscribe(): void;
    connect(subscribeData?: SubscriptionOptions): Promise<Client>;
    close(): Promise<void>;
    /**
     * Analyse, decode and emit packets
     */
    private handleRecvPacket;
    /**
     * Get projects stored on the console
     * @param fetchScenes Should scenes be fetched as well
     */
    getProjects(fetchScenes: true): Promise<FileListItem.ProjectItem<{
        scenes: FileListItem.SceneItem[];
    }>[]>;
    getProjects(fetchScenes?: false): Promise<FileListItem.ProjectItem[]>;
    getScenes(): Promise<{
        name: string;
        title: string;
    }[]>;
    /**
     * Get scenes of a project stored on the console
     */
    getScenesOfProject(projFile: string): Promise<FileListItem.SceneItem[]>;
    /**
     * Current loaded scene
     */
    get currentScene(): string;
    /**
     * Current loaded project
     */
    get currentProject(): string;
    /**
     * Get channel presets stored on the console
     */
    getChannelPresets(): Promise<FileListItem.ChannelPresetItem[]>;
    sendList(key: typeof FDHelper.PROJECTS): Promise<FileListItem.ProjectItem[]>;
    sendList(key: typeof FDHelper.CHANNEL_PRESETS): Promise<FileListItem.ChannelPresetItem[]>;
    sendList(key: ReturnType<typeof FDHelper.SCENES_OF>): Promise<FileListItem.SceneItem[]>;
    /**
     * Send bytes to the console
     */
    private _sendPacket;
    private _writeBytes;
    /**
     * @param projFile e.g 01.Showfile.proj
     */
    recallProject(projFile: string): void;
    /**
     *
     * @param projFile e.g. 01.Showfile.proj
     * @param sceneFile e.g. 02.SceneBackup.scn
     */
    recallProjectScene(projFile: string, sceneFile: string): void;
    recallChannelStrip(selector: ChannelSelector, chanFile: string): void;
    /**
     * Mute a given channel
     */
    mute(selector: ChannelSelector): void;
    /**
     * Unmute a given channel
     */
    unmute(selector: ChannelSelector): void;
    /**
     * Toggle the mute status of a channel
     */
    toggleMute(selector: ChannelSelector): void;
    /**
     * Get mute status of a channel
     */
    getMute(selector: ChannelSelector): any;
    /**
     * Set the mute status of a channel
     */
    setMute(selector: ChannelSelector, status: boolean | "toggle"): void;
    /**
     * @private
     */
    private _getMuteTargetString;
    /**
     * Toggle the solo status of a channel
     */
    toggleSolo(selector: ChannelSelector): void;
    /**
     * Get solo status of a channel
     */
    getSolo(selector: ChannelSelector): any;
    /**
     * Set the solo status of a channel
     */
    setSolo(selector: ChannelSelector, status: boolean | "toggle"): void;
    /**
     * @private
     */
    private _getSoloTargetString;
    setColor(selector: ChannelSelector, hex: string, alpha?: number): void;
    setColour(...args: Parameters<this["setColor"]>): any;
    getColor(selector: ChannelSelector): any;
    getColour(...args: Parameters<this["getColor"]>): any;
    /**
     * For a mono channel, the pan value is the pan value from 0 (hard left) to 100 (hard right)
     * For a stereo channel, the pan value is the width from 0 to 100 (stereo)
     */
    setPan(selector: ChannelSelector, pan: number): void;
    /**
     * @internal By original nature, only an odd numbered channel is targeted (& ~1)
     */
    setLink(selector: ChannelSelector, link: boolean): void;
    private _getLevelString;
    getLevel(selector: ChannelSelector): any;
    /**
     * @internal Send a level command to the target
     * targetLevel - [0, 100]
     */
    private _setLevel;
    /**
     * Set volume (decibels)
     *
     * @param channel
     * @param level range: -84 dB to 10 dB
     */
    setChannelVolumeLogarithmic(selector: ChannelSelector, decibel: number, duration?: number): Promise<null>;
    /**
     * Set volume (pseudo intensity)
     *
     * @description Sound is difficult, so this function attempts to provide a "what-you-see-is-what-you-get" interface to control the volume levels.
     *              `100` Sets the fader to the top (aka +10 dB)
     *              `72` Sets the fader to unity (aka 0 dB) or a value close enough
     *              `0` Sets the fader to the bottom (aka -84 dB)
     * @see http://www.sengpielaudio.com/calculator-levelchange.htm
     */
    setChannelVolumeLinear(selector: ChannelSelector, linearLevel: number, duration?: number): Promise<null>;
    /**
     * Look at metering data and adjust channel fader so that the level is of a certain loudness
     * NOTE: This is not perceived loudness. Not very practical, but useful in a pinch?
     *
     * @param channel
     * @param level
     * @param duration
     */
    normaliseChannelTo(channel: any, level: any, duration?: number): Promise<void>;
}
export default Client;
