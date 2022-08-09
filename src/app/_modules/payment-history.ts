export class PaymentHistory {

    id !: number;
    transactionReferenceNo !: string;
    subTransactionNo !: string;
    toTalAmount !: number; 
    cardNo !: number;
    subAmount !: number;
    paymentDate ! : string;
    paymentType !: string;
   
   
    
   
}

// "id": 12,
//     "transactionReferenceNo": "ABC621",
//     "subTransactionNo": "ABC6211",
//     "toTalAmount": 10.0,
//     "cardNo": 4377480002258743,
//     "subAmount": 10.0,
//     "paymentDate": "2022-08-09T05:08:19.472+00:00",
//     "paymentType": "I Pay"

// cardNo: 4377480002258743
// : 19
// paymentDate: "2022-08-09T07:53:09.878+00:00"
// paymentType: "I Pay"
// subAmount: 5
// subTransactionNo: "ABC3181"
// toTalAmount: 5
// transactionReferenceNo: "ABC318"