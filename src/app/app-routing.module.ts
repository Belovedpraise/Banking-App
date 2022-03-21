import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransferComponent } from './transfer/transfer.component';
import { WalletComponent } from './wallet/wallet.component';
import { WithdrawComponent } from './withdraw/withdraw.component';



const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"nav", component:NavComponent},
  {path:"signup", component:SignUpComponent},
  {path:"signin", component:SignInComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"withdraw", component:WithdrawComponent},
  {path:"deposit", component:DepositComponent},
  {path:"transfer", component:TransferComponent},
  {path:"wallet", component:WalletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
