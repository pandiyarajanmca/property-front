import { Component, OnInit, Input } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  @Input() propertyImages: any[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [
      {
        arrowPrevIcon: 'fa fa-angle-left',
        arrowNextIcon: 'fa fa-angle-right',
        closeIcon: 'fa fa-close',
        fullscreenIcon: 'fa fa-arrows',
        spinnerIcon: 'fa fa-refresh fa-spin fa-3x fa-fw',
        // previewFullscreen: true
      },
      {
        width: '100%',
        height: '550px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.propertyImages;
  }
}
