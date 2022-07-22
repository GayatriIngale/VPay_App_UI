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
import { ShowoffersComponent } from './showoffers/showoffers.component';
import { AddtowalletComponent } from './component/addtowallet/addtowallet.component';
<<<<<<< HEAD
import { PaymentComponent } from './component/payment/payment.component';
=======
import { VeiwofferComponent } from './veiwoffer/veiwoffer.component';
>>>>>>> 6579721a3abab099b85a36b17eb805e29b471bab

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
<<<<<<< HEAD
  { path: 'addtoWallet', component: AddtowalletComponent },
  { path: 'payment', component: PaymentComponent }
=======
  { path: 'viewOffer', component: VeiwofferComponent },
  { path: 'addtoWallet', component: AddtowalletComponent }
>>>>>>> 6579721a3abab099b85a36b17eb805e29b471bab

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
