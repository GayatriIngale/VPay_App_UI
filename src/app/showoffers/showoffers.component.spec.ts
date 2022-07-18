import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoffersComponent } from './showoffers.component';

describe('ShowoffersComponent', () => {
  let component: ShowoffersComponent;
  let fixture: ComponentFixture<ShowoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
