import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

   propertyImages: any;

  constructor() { }

  ngOnInit() {
    this.initProperty();

  }

  initProperty() {
    this.propertyImages = [
      {
          small: 'assets/images/property/property-1.png',
          medium: 'assets/images/property/property-1.png',
          big: 'assets/images/property/property-1.png'
      },
      {
          small: 'assets/images/property/property-2.png',
          medium: 'assets/images/property/property-2.png',
          big: 'assets/images/property/property-2.png'
      },
      {
          small: 'assets/images/property/property-3.png',
          medium: 'assets/images/property/property-3.png',
          big: 'assets/images/property/property-3.png'
      },
      {
        small: 'assets/images/property/property-1.png',
        medium: 'assets/images/property/property-1.png',
        big: 'assets/images/property/property-1.png'
    },
    {
        small: 'assets/images/property/property-2.png',
        medium: 'assets/images/property/property-2.png',
        big: 'assets/images/property/property-2.png'
    },
    {
        small: 'assets/images/property/property-3.png',
        medium: 'assets/images/property/property-3.png',
        big: 'assets/images/property/property-3.png'
    }
  ];
  }


}
