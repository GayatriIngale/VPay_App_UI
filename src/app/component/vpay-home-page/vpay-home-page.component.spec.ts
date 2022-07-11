import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPayHomePageComponent } from './vpay-home-page.component';

describe('VPayHomePageComponent', () => {
  let component: VPayHomePageComponent;
  let fixture: ComponentFixture<VPayHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPayHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPayHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
