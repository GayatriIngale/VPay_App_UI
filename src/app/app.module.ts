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
import { AddtowalletComponent } from './component/addtowallet/addtowallet.component';
import { ShowoffersComponent } from './component/showoffers/showoffers.component';
import { PaymentComponent } from './component/payment/payment.component';
import { VeiwofferComponent } from './component/veiwoffer/veiwoffer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { PayBySavingAccountComponent } from './component/pay-by-saving-account/pay-by-saving-account.component';
import { MatTableModule } from '@angular/material/table';
import { BalanceTermsComponent } from './balance-terms/balance-terms.component';
import { LoanTermsComponent } from './loan-terms/loan-terms.component'  
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';


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
   PaymentComponent,
   VeiwofferComponent,
  HeaderComponent,
  FooterComponent,
  PayBySavingAccountComponent,
  BalanceTermsComponent,
  LoanTermsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatToolbarModule,
    MatPseudoCheckboxModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
