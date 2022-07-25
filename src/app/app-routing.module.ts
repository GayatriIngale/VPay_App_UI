import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKycComponent } from './component/add-kyc/add-kyc.component';
import { AuthAdhaarComponent } from './component/auth-adhaar/auth-adhaar.component';
import { CheckKycComponent } from './component/check-kyc/check-kyc.component';
import { AddCreditCardsComponent } from './component/add-credit-cards/add-credit-cards.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { LoginUserComponent } from './component/login-user/login-user.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { VPayHomePageComponent } from './component/vpay-home-page/vpay-home-page.component';
import { AddtowalletComponent } from './component/addtowallet/addtowallet.component';
import { ShowoffersComponent } from './component/showoffers/showoffers.component';
import { VeiwofferComponent } from './component/veiwoffer/veiwoffer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginUserComponent },
  {path : 'register', component: RegisterUserComponent},
  { path: 'VPay', component: VPayHomePageComponent },
  { path: 'addCards', component: AddCreditCardsComponent },
  { path: 'cardList', component: CardListComponent},
  { path: 'checkKyc', component: CheckKycComponent },
  { path: 'addKYC', component: AddKycComponent },
  { path: 'auth', component: AuthAdhaarComponent },
  { path: 'showOffers', component: ShowoffersComponent },
  { path: 'viewOffer', component: VeiwofferComponent },
  { path: 'addtoWallet', component: AddtowalletComponent }

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
