type Bounds = [number, number];
/**
 * Convert a logarithmic volume to its respective linear value [0-100]
 */
export declare function logVolumeToLinear(db: any): number;
/**
 * Restrict `val` between a `min` and `max`
 */
export declare function clamp(val: number, [min, max]: Bounds): number;
type CancelTransitionFn = () => void;
/**
 * Transition a value along an easing sine curve.
 * _Should_ work from a -> b when a </> b
 *
 * @param from Initial value
 * @param to Final value
 * @param duration Transition period (ms)
 * @param fn Function to execute(intermediateValue)
 * @param callback Completion callback
 * @returns Cancel function
 */
export declare function transitionValue(from: number, to: number, duration: number, fn: (value: number) => any, callback?: () => void): CancelTransitionFn;
export declare class UniqueRandom {
    #private;
    static get(bits: number): UniqueRandom;
    constructor(bits: number);
    request(): number;
    release(value: number): void;
    get active(): number[];
}
export {};
