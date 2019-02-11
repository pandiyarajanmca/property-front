import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './landing/landing.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletWithdrawComponent } from './wallet-withdraw/wallet-withdraw.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
const routes: Routes = [
  // { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: '', component: LandingComponent},
  { path: 'home', component: LandingComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'buy/:pid', component: BuyDetailsComponent},
  { path: 'sell', component: SellComponent},
  { path: 'wallet-details', component: WalletComponent},
  { path: 'wallet-withdraw', component: WalletWithdrawComponent},
];
@NgModule({
  exports: [RouterModule],
  imports: [
      RouterModule.forChild(routes)
  ]
})
export class PortalRoutingModule { }
