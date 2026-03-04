/**
 * Recursive tree builder for '/'-delimited property strings
 */
/**

  Tree
  +-Value
  +-Value
  +-Tree
  | +-Value
  | \-Tree
  |   \-Value
  +-Value

**/
export default class KVTree {
    constructor(base?: string, parent?: any);
    register(path: string | string[], value: any): void;
    get(path: string | string[]): any;
    get path(): string;
    toJSON(): any;
}
