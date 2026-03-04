import type Client from "../Client";
import type { ZlibNode } from "../util/zlib/zlibNodeParser";
export default function handleCKPacket(this: Client, data: Buffer): ZlibNode;
