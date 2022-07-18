import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdhaarComponent } from './auth-adhaar.component';

describe('AuthAdhaarComponent', () => {
  let component: AuthAdhaarComponent;
  let fixture: ComponentFixture<AuthAdhaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAdhaarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAdhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
