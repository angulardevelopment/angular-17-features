import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutableComponent } from './immutable.component';

describe('ImmutableComponent', () => {
  let component: ImmutableComponent;
  let fixture: ComponentFixture<ImmutableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmutableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
