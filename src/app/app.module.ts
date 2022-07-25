import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserComponent } from './component/login-user/login-user.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { VPayHomePageComponent } from './component/vpay-home-page/vpay-home-page.component';
import { AddCreditCardsComponent } from './component/add-credit-cards/add-credit-cards.component';
import { CardListComponent } from './component/card-list/card-list.component';
import { CheckKycComponent } from './component/check-kyc/check-kyc.component';
import { AddKycComponent } from './component/add-kyc/add-kyc.component';
import { AuthAdhaarComponent } from './component/auth-adhaar/auth-adhaar.component';
import { ShowoffersComponent } from './showoffers/showoffers.component';
import { AddtowalletComponent } from './component/addtowallet/addtowallet.component';
import { PaymentComponent } from './component/payment/payment.component';
import { VeiwofferComponent } from './veiwoffer/veiwoffer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent,
    VPayHomePageComponent,
    AddCreditCardsComponent,

    CardListComponent,

    CheckKycComponent,
    AddKycComponent,
    AuthAdhaarComponent,
    ShowoffersComponent,
    AddtowalletComponent,
    PaymentComponent,
    VeiwofferComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
