import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { PortalRoutingModule } from './portal.routing.module';
import { CommonComponentModule } from '../common-components/common-component.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletWithdrawComponent } from './wallet-withdraw/wallet-withdraw.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BuyDetailsComponent } from './buy-details/buy-details.component';

// import { PropertyService } from '../_services/property.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent, BuyComponent, SellComponent, FilterComponent,
     LoginComponent, WalletComponent, WalletWithdrawComponent, BuyDetailsComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    CommonComponentModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    // PropertyService
  ]
})
export class PortalModule { }
