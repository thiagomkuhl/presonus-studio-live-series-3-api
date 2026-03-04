export declare const ZlibValueSymbol: unique symbol;
export declare const ZlibRangeSymbol: unique symbol;
export declare const ZlibStringEnumSymbol: unique symbol;
export declare const ZlibKeySymbol: unique symbol;
type Obj<T = any> = {
    [key: string]: T;
};
export interface Range {
    min: number;
    max: number;
    def: number;
    units?: string;
}
export type ZlibInputNode = {
    children?: Obj<ZlibInputNode>;
    values?: Obj<any>;
    strings?: Obj<string[]>;
    ranges?: Obj<Range>;
};
export type ZlibNode<T = any> = {
    [ZlibKeySymbol]: string[];
    [ZlibValueSymbol]: T;
    [ZlibRangeSymbol]?: ZlibInputNode["ranges"];
    [ZlibStringEnumSymbol]?: ZlibInputNode["strings"];
};
type zlibNodeParserOptArgs = Partial<{
    /**
     * Parent node
     */
    parent?: ZlibNode;
    /**
     * Node root value
     */
    base?: Partial<ZlibNode>;
}>;
/**
 * Parse deserialised zlib data into an object tree
 */
export declare function zlibParseNode(node: ZlibInputNode, { base }?: zlibNodeParserOptArgs): ZlibNode;
export default zlibParseNode;
/**
 * Extract the contents of a node
 */
export declare function dumpNode(node: ZlibNode, recurseDepth?: number): any;
