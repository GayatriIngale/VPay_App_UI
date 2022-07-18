import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtowalletComponent } from './addtowallet.component';

describe('AddtowalletComponent', () => {
  let component: AddtowalletComponent;
  let fixture: ComponentFixture<AddtowalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtowalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtowalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
