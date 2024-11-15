import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfComponent } from './perf.component';

describe('PerfComponent', () => {
  let component: PerfComponent;
  let fixture: ComponentFixture<PerfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
