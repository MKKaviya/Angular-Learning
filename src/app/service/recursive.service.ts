import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecursiveService {
  private memo: { [key: number]: number } = {};

  constructor() {}

  recursive(position: number): number {
    if (position <= 1) {
      return position;
    }
    if (this.memo[position]) {
      return this.memo[position];
    }
    this.memo[position] =
      this.recursive(position - 1) + this.recursive(position - 2);
    return this.memo[position];
  }
}
