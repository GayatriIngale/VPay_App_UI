import { Component, OnInit } from '@angular/core';
import { KycService } from 'src/app/_service/KycService';

@Component({
  selector: 'app-check-kyc',
  templateUrl: './check-kyc.component.html',
  styleUrls: ['./check-kyc.component.css']
})
export class CheckKycComponent implements OnInit {
  isKyced: boolean = false;
  isLoan: boolean = false;

  constructor(private kycService : KycService) {

   }

  ngOnInit(): void {
  this.kycService.checkKyceCust(localStorage.getItem('mobileNumber')).subscribe(data => {
    if (data == "Success"){
      this.isKyced = true;
    }else{
      this.isKyced = false;

    }
  })

  this.kycService.checkLoan(localStorage.getItem('mobileNumber')).subscribe(data =>{
    if (data == "Success"){
      this.isLoan = true;
    }
  })
  }

}
