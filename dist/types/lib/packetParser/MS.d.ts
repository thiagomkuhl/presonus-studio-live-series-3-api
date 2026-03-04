import type Client from "../Client";
import type { ChannelTypes } from "../constants";
type MSData = Record<ChannelTypes, number[]>;
export default function handleMSPacket(this: Client, data: Buffer): MSData;
export {};
