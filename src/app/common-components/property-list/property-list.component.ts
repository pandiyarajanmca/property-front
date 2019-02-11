import { Component, OnInit, Input } from '@angular/core';
import { PropertyService } from '../../_services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {


  @Input() propertiesList: any;
  @Input() listView: boolean;

  constructor() {

  }


  ngOnInit() {
  }

}
