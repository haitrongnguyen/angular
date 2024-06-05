import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCustomPipeComponent } from './demo-custom-pipe.component';

describe('DemoCustomPipeComponent', () => {
  let component: DemoCustomPipeComponent;
  let fixture: ComponentFixture<DemoCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCustomPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
