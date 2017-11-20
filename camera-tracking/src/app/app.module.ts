import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CameraService } from '../app/camera-tracking/camera.service';
import { AppComponent } from './app.component';
import { CameraTrackingComponent } from './camera-tracking/camera-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraTrackingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CameraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
