export default class KeepAliveHelper {
    #private;
    constructor(timeout?: number);
    updateTime(): void;
    intercept(fn: (data: Buffer) => {
        id: number;
        data: any;
    }): (data: Buffer) => ReturnType<typeof fn>;
    start(checkFn: (data: Buffer[]) => void, failFn: () => void): void;
}
