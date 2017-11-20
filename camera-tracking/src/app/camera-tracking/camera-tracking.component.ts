import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CameraService } from './camera.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-camera-tracking',
  templateUrl: './camera-tracking.component.html',
  styleUrls: ['./camera-tracking.component.css']
})
export class CameraTrackingComponent implements OnInit {
  @ViewChild('player') player: any;
  @ViewChild('canvas') canvas: ElementRef;

  isCameraAvailable: boolean = false;
  canvasContext: any;
  stream: any;
  photosTaken: Array<string> = [];

  constructor(
    private camera: CameraService,
    private sanitizer: DomSanitizer
  ) {}
  
  ngOnInit() {
    this.camera.askForPermission().then((stream) => {
      this.stream = stream;
      this.canvasContext = this.canvas.nativeElement.getContext('2d');

      this.isCameraAvailable = true;
      this.player.nativeElement.src = window.URL.createObjectURL(stream);
      this.player.nativeElement.play();
    }).catch((error) => {
      console.log(error);
      this.isCameraAvailable = false;
    });
  }

  takePhoto() {
    const taken = this.player.nativeElement;
    
    this.canvasContext.drawImage(taken, 0, 0);

    this.photosTaken.unshift(
      this.canvas.nativeElement.toDataURL()
    )
  }

  stop() {
    this.stream.getVideoTracks().forEach(track => {
      track.enabled = false;
    });
  }

  resume() {
    this.stream.getVideoTracks().forEach(track => {
      track.enabled = true;
    });
  }
}
