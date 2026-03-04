export type ValueTransformer = (value: unknown, key?: string[]) => any;
export type ValueTransformerLookup = {
    [prefix: string]: ValueTransformer;
};
/**
 * Lookup - Transformer key
 * Symbol - Reference key
 */
export declare const doesLookupMatch: (lookup: string | string[], symbolPath: string[]) => any;
/**
 * Value transformers allow values to be processed different depending on their key
 */
export declare function valueTransform(path: string | string[], value: any, valueTransformers: ValueTransformerLookup): typeof value;
export declare const DEFAULT_TRANSFORMS: {
    readonly integer: {
        readonly boolean: (value: any) => boolean;
    };
    readonly buffer: {
        readonly boolean: (bytes: Buffer) => boolean;
        readonly float: (bytes: Buffer) => number;
    };
};
export declare const IGNORE: unique symbol;
