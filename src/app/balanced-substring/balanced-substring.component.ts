import { Component, OnInit } from '@angular/core';
import { BalancedSubstringsService } from '../service/balanced-substrings.service';

@Component({
  selector: 'app-balanced-substring',
  templateUrl: './balanced-substring.component.html',
  styleUrls: ['./balanced-substring.component.scss'],
})
export class BalancedSubstringComponent {
  stringValue: string = '';
  result: string[] = [];
  showResult: boolean = false;
  constructor(private balancedSubstringService: BalancedSubstringsService) {}

  findBalancedSubstrings(): void {
    this.result = this.balancedSubstringService.getBalancedSubstrings(
      this.stringValue
    );
    this.showResult = true;
  }

  getJoinedResult() {
    return this.result.join(', ');
  }
  onStringChange() {
    this.showResult = false;
  }

  onClear() {
    this.stringValue = '';
    this.showResult = false;
  }
}
