import type SubscriptionOptions from "../types/SubscriptionOptions";
/**
 * Create subscription packet
 */
export declare function craftSubscribe(overrides?: SubscriptionOptions): Buffer<ArrayBuffer>;
export declare const unsubscribePacket: Buffer<ArrayBuffer>;
