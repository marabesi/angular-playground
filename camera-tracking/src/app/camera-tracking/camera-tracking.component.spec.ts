import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTrackingComponent } from './camera-tracking.component';

describe('CameraTrackingComponent', () => {
  let component: CameraTrackingComponent;
  let fixture: ComponentFixture<CameraTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
