import { type ChannelTypes } from "../constants";
import type ChannelCount from "../types/ChannelCount";
import type ChannelSelector from "../types/ChannelSelector";
/**
 * TODO: Create a proper context
 */
export declare function setCounts(channelCount: ChannelCount): void;
export declare function parseChannelString(selector: ChannelSelector, whitelist?: ChannelTypes[]): string;
