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
<<<<<<< HEAD
import { CardListComponent } from './component/card-list/card-list.component';
=======
import { CheckKycComponent } from './component/check-kyc/check-kyc.component';
import { AddKycComponent } from './component/add-kyc/add-kyc.component';
import { AuthAdhaarComponent } from './component/auth-adhaar/auth-adhaar.component';
import { ShowoffersComponent } from './showoffers/showoffers.component';
import { AddtowalletComponent } from './component/addtowallet/addtowallet.component';
>>>>>>> e1f4047c4f52d5582251a2c250af93e949d72ff4

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent,
    VPayHomePageComponent,
    AddCreditCardsComponent,
<<<<<<< HEAD
    CardListComponent
=======
    CheckKycComponent,
    AddKycComponent,
    AuthAdhaarComponent,
    ShowoffersComponent,
    AddtowalletComponent
>>>>>>> e1f4047c4f52d5582251a2c250af93e949d72ff4
    
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
