import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCreditCardsComponent } from './component/add-credit-cards/add-credit-cards.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { LoginUserComponent } from './component/login-user/login-user.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { VPayHomePageComponent } from './component/vpay-home-page/vpay-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginUserComponent },
  {path : 'register', component: RegisterUserComponent},
  { path: 'VPay', component: VPayHomePageComponent },
  { path: 'addCards', component: AddCreditCardsComponent },
  { path: 'cardList', component: CardListComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
