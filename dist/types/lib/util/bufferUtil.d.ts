/**
 * Convert an unsigned short (16-bit) to a 2-byte buffer
 */
export declare function toShort(i: any): Buffer<ArrayBuffer>;
/**
 * Convert an unsigned integer (32-bit) to a 4-byte buffer
 */
export declare function toInt(i: any): Buffer<ArrayBuffer>;
/**
 * Convert a decimal to a 4-byte buffer
 */
export declare function toFloat(i: number): Buffer<ArrayBuffer>;
/**
 * Convert a decimal to a 4-byte boolean
 */
export declare function toBoolean(val: boolean): Buffer<ArrayBuffer>;
declare global {
    interface Buffer {
        /**
         * Returns a boolean indicating if the object partially matches `buffer`
         */
        matches(buffer: Buffer): boolean;
    }
}
