import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyListDirective } from '../property-list.directive';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NguiMapModule} from '@ngui/map';

@NgModule({
  declarations: [PropertyListComponent, PropertyListDirective, BreadcrumbsComponent, PropertyDetailsComponent, GalleryComponent],
  imports: [
    CommonModule,
    NgxGalleryModule,
    NgbModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAqrtB4hrMOUobO10f62OPfM6L7BZERAG4&libraries=visualization,places,drawing,geometry'})
  ],
  exports: [
    PropertyListComponent,
    PropertyListDirective,
    PropertyDetailsComponent
  ]
})
export class CommonComponentModule { }
