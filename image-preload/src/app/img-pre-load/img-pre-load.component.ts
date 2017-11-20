import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-img-pre-load',
  templateUrl: './img-pre-load.component.html', 
  styleUrls: ['./img-pre-load.component.css']
})
export class ImgPreLoadComponent implements OnInit {

  @Input()
  src: string = '';

  isLoading: boolean = true;
  
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if ( !this.src ) {
      return;
    }

    this.http.get(this.src, {
      responseType: 'blob'
    }).subscribe(res => {
      let url = window.URL;
      this.src = this.safeUrl(url.createObjectURL(res));
    }, error => {
      console.log(this.src, error);
    }, () => {
      this.isLoading = false;
    });
  }

  safeUrl(url: string): any {
    if (url) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }
  }
}
