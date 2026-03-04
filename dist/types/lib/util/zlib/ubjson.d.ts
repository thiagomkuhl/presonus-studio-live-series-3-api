/**
 * Deserialise a zlib buffer into a raw object payload
 * Partially implements the UBJSON specification
 * https://ubjson.org
 */
export declare function deserialiseUBJSON<T>(buf: Buffer): T;
export default deserialiseUBJSON;
