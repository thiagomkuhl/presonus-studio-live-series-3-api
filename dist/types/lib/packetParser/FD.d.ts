export default function handleFDPacket(data: Buffer): {
    id: number;
    data: Buffer<ArrayBufferLike>;
};
