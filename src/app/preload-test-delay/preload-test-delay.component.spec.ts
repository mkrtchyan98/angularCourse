import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadTestDelayComponent } from './preload-test-delay.component';

describe('PreloadTestDelayComponent', () => {
  let component: PreloadTestDelayComponent;
  let fixture: ComponentFixture<PreloadTestDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadTestDelayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadTestDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
