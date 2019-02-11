import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguiMapModule} from '@ngui/map';
// import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { PropertyService } from './_services/property.service';
import { CommonComponentModule } from './common-components/common-component.module';
import { UserProfileModule } from './users/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonComponentModule,
    UserProfileModule,
    ImageCropperModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAqrtB4hrMOUobO10f62OPfM6L7BZERAG4&libraries=visualization,places,drawing,geometry'})
  ],
  providers: [
    // PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
