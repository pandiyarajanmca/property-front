import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsComponent } from './listings/listings.component';
import {OverviewComponent} from './overview/overview.component';
import {ProfileComponent} from './profile/profile.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UsersRoutingModule} from './users.routing.module';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    ListingsComponent,
    OverviewComponent,
    ProfileComponent,
    MessagesComponent],
  imports: [
    CommonModule,
    NgbModule,
    UsersRoutingModule
  ]
})
export class UserProfileModule { }
