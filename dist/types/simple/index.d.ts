import { Client as StudioLiveAPI, type ChannelSelector } from "../api";
import type LevelEvent from "./types/LevelEvent";
import type MuteEvent from "./types/MuteEvent";
import type SoloEvent from "./types/SoloEvent";
export declare function settingsPathToChannelSelector(path: string | string[]): ChannelSelector;
type SimpleAPIEventMap = {
    level: [LevelEvent];
    mute: [MuteEvent];
    solo: [SoloEvent];
    propertyChange: [
        {
            channel: ChannelSelector;
            value: any;
            type: any;
        }
    ];
};
type ExtendedEvents = StudioLiveAPI["on"] & (<K extends keyof SimpleAPIEventMap>(event: K, listener: (...arg: SimpleAPIEventMap[K]) => void) => any);
declare interface SimpleClient extends StudioLiveAPI {
    on: ExtendedEvents;
    once: ExtendedEvents;
    off: ExtendedEvents;
    addListener: ExtendedEvents;
    removeListener: ExtendedEvents;
}
declare class SimpleClient extends StudioLiveAPI {
    #private;
    emit: StudioLiveAPI["emit"] & (<K extends keyof SimpleAPIEventMap>(event: K, ...args: SimpleAPIEventMap[K]) => any);
    constructor(...args: ConstructorParameters<typeof StudioLiveAPI>);
    connect(...args: Parameters<StudioLiveAPI["connect"]>): Promise<this>;
}
export { SimpleClient };
