/**
 * Add length metadata
 * @param buffer
 * @returns length16LE 0x00 0x00 DATA
 */
export declare function prependLengthData(buffer: Buffer): Buffer<ArrayBuffer>;
export declare function jsonStringifyPack(json: any): string;
export declare function JSONtoPacketBuffer(json: any): Buffer<ArrayBuffer>;
