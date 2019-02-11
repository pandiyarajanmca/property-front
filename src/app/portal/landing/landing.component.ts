import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../_services/property.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  propertiesList: any;
  // listViewType: for grid view  false  & list view true
  listViewType = false;
  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.getPropertyList();
  }

  getPropertyList() {
    this.propertyService.initSources().subscribe(data => {
      this.propertiesList = data['result'];
      console.log(this.propertiesList);
    });
  }
}
