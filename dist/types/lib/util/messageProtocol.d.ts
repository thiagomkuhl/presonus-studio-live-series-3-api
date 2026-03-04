import { type MessageCode } from "../constants";
/**
 * Decode packet buffer
 * @returns message code
 * @returns buffer
 */
export declare function analysePacket(packet: Buffer, ignoreLengthMismatch?: boolean): [MessageCode, Buffer];
/**
 * Craft a packet
 *
 * @param messageCode
 * @param data
 * @param customA
 * @param customB
 * @returns
 */
export declare function createPacket(messageCode: Buffer | string, data?: Buffer | string, customA?: any, customB?: any): Buffer<ArrayBuffer>;
