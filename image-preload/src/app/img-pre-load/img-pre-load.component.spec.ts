import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPreLoadComponent } from './img-pre-load.component';
import { HttpClientModule } from '@angular/common/http';

describe('ImgPreLoadComponent', () => {
  let component: ImgPreLoadComponent;
  let fixture: ComponentFixture<ImgPreLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ImgPreLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPreLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should be loading by default', () => {
    expect(component.isLoading).toBeTruthy();
  });

  it('should set to false when the image is done loading', () => {
    component.src = 'http://myimageurl.com';
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.isLoading).toBeFalsy();
  });
});
