/*
Implemented from https://depth-first.com/articles/2019/01/22/scanner-driven-parser-development/
To be extended
*/

export class Scanner {
  input: string;
  private _cursor: number;

  constructor(input: string) {
    this.input = input;
    this._cursor = 0;
  }

  get cursor(): number {
    return this._cursor;
  }

  peek(): string {
    return this.input[this._cursor];
  }

  pop(): string {
    return this.input[this._cursor++] ?? '';
  }

  scan(regex: RegExp): string | undefined {
    if (!regex.global) {
      throw Error('For a Scanner-Regex, the global flag must be set');
    }

    regex.lastIndex = this._cursor;
    const match = regex.exec(this.input);

    if (match === null || match.index !== this._cursor) return undefined;

    this._cursor = regex.lastIndex;
    return match[0];
  }
}
