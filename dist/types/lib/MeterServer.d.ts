import * as dgram from "dgram";
export type MeterData = {};
export declare enum MeterGroups {
    INPUT_SIGNAL = 0,
    INPUT_GATE_IN = 1,
    INPUT_GATE_OUT = 2,
    INPUT_STRIP1_OUT = 3,
    INPUT_STRIP2_OUT = 4,
    INPUT_LIMITER_OUT = 5,
    /**
     * i.e. FX Returns, Digital Return, Talkback
     */
    RETURNS = 512,
    AUX_SENDS = 1024,
    AUX_STRIP_IN = 1026,
    AUX_STRIP1_OUT = 1027,
    AUX_STRIP2_OUT = 1028,
    AUX_LIMITER_OUT = 1029,
    FX_SENDS = 1280,
    MAIN_SENDS = 1792,
    MAIN_STRIP_IN = 1794,
    MAIN_STRIP1_OUT = 1795,
    MAIN_STRIP2_OUT = 1796,
    MAIN_LIMITER_OUT = 1797
}
export declare function parseDataFrame(data: Buffer<ArrayBufferLike>): MeterData;
/**
 * Create a UDP server and await data.
 *
 * This function **does not** send the packet to initiate the meter data request,
 * it relies on a request sent from the <API>.meterSubscribe method
 *
 * @param port UDP port to listen on
 * @param channelCounts Channel count data
 * @param onData Callback
 */
export default function createServer(port: any, onData: (data: MeterData) => any): Promise<dgram.Socket>;
