import KVTree from "./KVTree";
interface FallbackInterface {
    get(path: string | string[]): any;
}
/**
 * Internal KV State Tree
 * Types do not match transformed
 */
type Node<root> = {
    [key in keyof root]: (root[key] extends {
        children: any;
    } ? Node<root[key]["children"]> : Node<root[key]>) & (root[key] extends {
        values: any;
    } ? {
        [k in keyof root[key]["values"]]: root[key]["values"][k];
    } : object);
};
/**
 * Provides a function to set/get paths
 * Delimiter: `.` or `/`
 * @param fallback Fallback method interface that is used if the path could not be found internally
 */
export default function CacheProvider(fallback?: FallbackInterface): {
    set(path: string | string[], value: any): void;
    get<T = any>(path: string | string[], _default?: any): T | typeof _default;
    _data: KVTree & Node<import("../types/ZlibPayload").ZlibPayloadChildren>;
};
export {};
