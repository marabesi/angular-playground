import { Injectable } from '@angular/core';

@Injectable()
export class CameraService {

    askForPermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                    video: true
                }).then((stream) => {
                    resolve(stream);
                }).catch((error) => {
                    reject(error);
                });
            }
        });
    }
}