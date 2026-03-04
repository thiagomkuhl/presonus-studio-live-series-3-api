/**
 * Parse Zlib packets
 */
import { type ZlibNode } from "./zlibNodeParser";
/**
 * Deserialise and parse a zlib buffer into an object tree
 */
export declare function zlibParse(zlib: Buffer): ZlibNode<any>;
export default zlibParse;
export declare function getZlibValue<RType = ZlibNode<unknown>>(node: ZlibNode, key: string | string[]): RType;
/**
 *  @deprecated testing
 */
export declare function getZlibKeyData(node: ZlibNode, key: string | string[], { value, range, strings }?: {
    value?: boolean;
    range?: boolean;
    strings?: boolean;
}): {
    value?: any;
    range?: any;
    strings?: any;
};
