/**
 * Split a path string into tokens
 * Delimiter: `.` or `/`
 * If `key` is already an array, pass through the value
 *
 * @example
 * tokenisePath('this.is.a.key') // => ['this', 'is', 'a', 'key']
 * tokenisePath('this/is/a/key') // => ['this', 'is', 'a', 'key']
 * tokenisePath(['this', 'is', 'a', 'key']) // => ['this', 'is', 'a', 'key'] // passthrough
 */
export declare function tokenisePath(key: string | string[]): string[];
export declare function simplifyPathTokens(path: string | string[]): string[];
