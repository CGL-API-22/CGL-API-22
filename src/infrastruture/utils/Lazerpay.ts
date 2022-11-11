import Lazerpay from 'lazerpay-node-sdk';

export default class LazerPay {

    lazerpay: Lazerpay;

    constructor(){
        this.lazerpay = new Lazerpay("pk_test_g1iGzCBLTPLwbEFdLis3t5iQDuGEYTqyBKanRQSOenYFzUzLVa", "pk_test_g1iGzCBLTPLwbEFdLis3t5iQDuGEYTqyBKanRQSOenYFzUzLVa");
    }

    //start depositing
    async initialPayment(payload: IInitialPayment) {
        try {
          const transactionpayload = {
            reference: payload.reference, // Replace with a reference you generated
            customer_name: payload.customer_name,
            customer_email: payload.customer_email,
            coin: 'BUSD', // BUSD, DAI, USDC or USDT
            currency: 'NGN', // NGN, AED, GBP, EUR
            amount: payload.amount,
          };
      
          const response = await this.lazerpay.Payment.initializePayment(transactionpayload);
      
          return response
        } catch (error) {
          console.log(error);
        }
    };

    //finanlize depositing
    async finalizePayment(payload: IFinalizePaymentPayload){
        try {
            const newpayload = {
              identifier: payload.reference
            };
        
            const response = await this.lazerpay.Payment.confirmPayment(newpayload);
            return response
          } catch (error) {
            console.log(error);
          }
    }

    //crypto withdrawal
    async withdrawal(payload: ICryptoWithdrawalPayload){
        const transaction_payload = {
            amount: payload.amount,
            recipient: payload.recipient, // address must be a bep20 address
            coin: 'BUSD',
            blockchain: 'Binance Smart Chain',
          };
          try {
            const response = await this.lazerpay.Payout.transferCrypto(transaction_payload);
           return response
          } catch (e) {
            console.log(e);
          }
    }
}

export interface ICryptoWithdrawalPayload {
    amount: number,
    recipient: string
}

export interface IFinalizePaymentPayload {
    reference: string
}

export interface IInitialPayment {
    reference: string, // Replace with a reference you generated
    customer_name: string,
    customer_email: string,
    amount: string,
}