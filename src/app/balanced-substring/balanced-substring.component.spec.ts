import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancedSubstringComponent } from './balanced-substring.component';

describe('BalancedSubstringComponent', () => {
  let component: BalancedSubstringComponent;
  let fixture: ComponentFixture<BalancedSubstringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancedSubstringComponent]
    });
    fixture = TestBed.createComponent(BalancedSubstringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
