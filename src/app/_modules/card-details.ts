export class CardDetails {
    id! : number;
    cardNumber! : number;
    cardHolderName! : String;
    bankName! :String;
    //userName! : String;
    totalDue !: number;
    minDue !: number;
    flag !: CharacterData;
    // billingDate ! : Date;
    mobileNumber !: number;
    isSelected! : boolean;
    amount ! : number;
    dueDate !: string;
    interestCharge ! :number;
    billingDate !: Date;
    otherCharges !: number;

}


// private String cardNumber;
// 	private  String cardHolderName;
// 	private String bankName;
// 	private String userName;

// private  Double totalDue;
// private  Double minDue;
// private Date billingDate;
// private  char flag; // by default N
// //private  String panNumber;
// private long mobileNumber;