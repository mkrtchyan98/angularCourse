import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadTestFirstComponent } from './preload-test-first.component';

describe('PreloadTestFirstComponent', () => {
  let component: PreloadTestFirstComponent;
  let fixture: ComponentFixture<PreloadTestFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadTestFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadTestFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
