import { Component, OnInit } from '@angular/core';
import { RecursiveService } from '../service/recursive.service';

@Component({
  selector: 'app-recursive',
  templateUrl: './recursive.component.html',
  styleUrls: ['./recursive.component.scss'],
})
export class RecursiveComponent implements OnInit {
  position: number = 5;
  _result: number | undefined;
  showResult: boolean = false;

  constructor(private recursiveService: RecursiveService) {}

  ngOnInit(): void {
    this.calculateFibonacci();
  }

  get result(): number | undefined {
    if (this._result === undefined || isNaN(this._result)) {
      this._result = this.recursiveService.recursive(this.position);
    }
    return this._result;
  }

  calculateFibonacci(): void {
    this._result = this.recursiveService.recursive(this.position);
    this.showResult = true;
  }

  onPositionChange(): void {
    this.showResult = false;
  }

  onClear() {
    this.position = 0;
    this.calculateFibonacci();
  }
}
