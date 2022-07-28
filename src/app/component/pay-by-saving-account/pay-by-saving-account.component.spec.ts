import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBySavingAccountComponent } from './pay-by-saving-account.component';

describe('PayBySavingAccountComponent', () => {
  let component: PayBySavingAccountComponent;
  let fixture: ComponentFixture<PayBySavingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBySavingAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBySavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
