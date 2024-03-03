import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BalancedSubstringsService {
  constructor() {}

  getBalancedSubstrings(S: string): string[] {
    let maxLength = 0;
    let result: string[] = [];

    for (let i = 0; i < S.length; i++) {
      for (let j = i + 2; j <= S.length; j++) {
        const substring = S.substring(i, j);
        if (this.isBalanced(substring)) {
          const length = substring.length;
          if (length >= maxLength) {
            if (length > maxLength) {
              maxLength = length;
              result = [substring];
            } else {
              result.push(substring);
            }
          }
        }
      }
    }

    return result;
  }

  isBalanced(substring: string): boolean {
    const counts: { [char: string]: number } = {};
    for (const char of substring) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return (
      Object.keys(counts).length === 2 &&
      new Set(Object.values(counts)).size === 1
    );
  }
}
