import type { ZlibNode } from "../util/zlib/zlibNodeParser";
export default function handleZBPacket(data: Buffer): ZlibNode;
export declare function parseCompressed(data: Buffer): ZlibNode;
