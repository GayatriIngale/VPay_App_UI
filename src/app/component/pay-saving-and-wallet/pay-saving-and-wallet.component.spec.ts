import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySavingAndWalletComponent } from './pay-saving-and-wallet.component';

describe('PaySavingAndWalletComponent', () => {
  let component: PaySavingAndWalletComponent;
  let fixture: ComponentFixture<PaySavingAndWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySavingAndWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySavingAndWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
