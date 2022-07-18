import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckKycComponent } from './check-kyc.component';

describe('CheckKycComponent', () => {
  let component: CheckKycComponent;
  let fixture: ComponentFixture<CheckKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckKycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
