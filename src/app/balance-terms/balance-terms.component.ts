import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, VeiwofferComponent } from '../component/veiwoffer/veiwoffer.component';

@Component({
  selector: 'app-balance-terms',
  templateUrl: './balance-terms.component.html',
  styleUrls: ['./balance-terms.component.css']
})
export class BalanceTermsComponent  {

  constructor(
    public dialogRef: MatDialogRef<BalanceTermsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  accept(){
    
  }
}
