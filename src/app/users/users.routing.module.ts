import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {ProfileComponent} from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'user-profile', component: ProfileComponent},
  { path: 'messages', component: MessagesComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
