import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwofferComponent } from './veiwoffer.component';

describe('VeiwofferComponent', () => {
  let component: VeiwofferComponent;
  let fixture: ComponentFixture<VeiwofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
