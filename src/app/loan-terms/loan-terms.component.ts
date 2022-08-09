import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../component/veiwoffer/veiwoffer.component';

@Component({
  selector: 'app-loan-terms',
  templateUrl: './loan-terms.component.html',
  styleUrls: ['./loan-terms.component.css']
})
export class LoanTermsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoanTermsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  accept(){
    
  }

}
