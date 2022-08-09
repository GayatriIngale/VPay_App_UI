import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTermsComponent } from './balance-terms.component';

describe('BalanceTermsComponent', () => {
  let component: BalanceTermsComponent;
  let fixture: ComponentFixture<BalanceTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
