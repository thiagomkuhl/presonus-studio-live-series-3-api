/**
 * Device discovery client
 * Listen to the `discover` event with <Discover>.on('discover', callback)
 */
import { EventEmitter } from "node:events";
import dgram from "node:dgram";
export default class Discovery extends EventEmitter {
    socket: dgram.Socket;
    /**
     * Scan for devices
     *
     * @param timeout Duration (in milliseconds) to discover for, or indefinitely if empty
     * @returns
     */
    start(timeout?: any): Promise<void>;
    /**
     * Shut down discovery client
     */
    stop(): void;
    /**
     * Setup routine
     */
    private setup;
}
