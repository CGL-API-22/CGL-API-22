import { String } from 'aws-sdk/clients/apigateway';
import axios from 'axios';

export default class PayStack {

    hostname = 'https://api.paystack.co'
    SECRET_KEY = 'sk_test_70ee6fc0c1e234888ba4dab22794b6b0ac758638'

    constructor(){

    }

    //initialize transaction
    async initializeTransaction(payload: IInitializeTransaction){

        const params = {
            "email": payload.email,
            "amount": payload.amount,
            "reference": payload.reference
          }

         return await axios.post(this.hostname + '/transaction/initialize', params, {
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
            'Content-Type': 'application/json'
          }}).then((success)=>{
                console.log(success);
            }).catch((error)=>{
                console.log(error);
            });

    }

    //create transaction receipent 
    async createTransferRecipient(payload: ITransferRecipient){
        const params = {
            "type": payload.type,
            "name": payload.name,
            "account_number": payload.account_number,
            "bank_code": payload.bank_code,
            "currency": payload.currency
        }

        return await axios.post(this.hostname + '/transferrecipient', params, {
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
            'Content-Type': 'application/json'
          }})
    }

    //fetch transaction receipent
    async fetchTransferRecipient(payload: IFetchTransferRecipient){
        return await axios.get(this.hostname + `/transferrecipient/${payload.id_or_code}`, {
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
            'Content-Type': 'application/json'
          }})
    }

    //delete transaction recipient
    async deleteTransferRecipient(id_or_code: string){
        return await axios.delete(this.hostname + `/transferrecipient/${id_or_code}`, {
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
          }})
    }

    //check transaction status
    async verifyTransaction(reference: string) {

        const response = await axios.get(this.hostname+ `/transaction/verify/${reference}`,{
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
            'Content-Type': 'application/json'
          }})

        return response
    }

    //initialize withdrawal
    async initializeWithdrawal(payload: IInitializeWithdrawal){
        const params = {
            "source": payload.source, 
            "reason": payload.reason, 
            "amount": payload.amount, 
            "recipient": payload.recipient
        }

        return await axios.post(this.hostname + '/transfer', params, {
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
            'Content-Type': 'application/json'
        }} )
    }

    //finalize withdrawal 
    async finalizeWithdrawal(payload: IFinalizeWithdrawal){
        const params = {
            "transfer_code": payload.transfer_code, 
            "otp": payload.otp
        }

        return await axios.post(this.hostname + '/transfer/finalize_transfer', params, {
            headers: {
            Authorization: 'Bearer '+this.SECRET_KEY,
            'Content-Type': 'application/json'
        }})
    }

    //deposit money 
    async deposit(payload: IBankDeposit){

        const params = {
            "email": payload.email,
            "amount": payload.amount,
            "bank":{
                "code": payload.bank,
                "account_number": payload.account_no
            },
            "birthday": payload.birthday
        }

        return await axios.post(this.hostname+'/charge', params, {
            headers: {
                Authorization: 'Bearer '+ this.SECRET_KEY,
                'Content-Type': 'application/json'
              }
        })
    }

    //submit otp to finish transaction
    async submitOTP(payload: ISubmitOTP){
    
        const params = {
            "otp": payload.otp,
            "reference": payload.reference
          }

        const response = await axios.post(this.hostname + '/charge/submit_otp', params, {
            headers: {
                Authorization: 'Bearer ' + this.SECRET_KEY,
                'Content-Type': 'application/json'
              }
        })
        
        return response
    }

    //get all banks
    async getBanks(){
        await axios.get(this.hostname + '/bank', {
            headers: {
                Authorization: 'Bearer ' + this.SECRET_KEY,
            }
        }).then((response)=> console.log(response.data)).catch((response)=> console.log(response))
    }


}

export interface ISubmitOTP {
    reference: string,
    otp: string
}

export interface IInitializeTransaction{
    email: string,
    amount: string,
    reference: string
}

export interface IBankDeposit {
    email: string,
    amount: string,
    bank: string,
    account_no: string,
    birthday: string
}

export interface ITransferRecipient {
    "type": string,
    "name": string,
    "account_number": string,
    "bank_code": string,
    "currency": string
}

export interface IFetchTransferRecipient {
    id_or_code: string
}

export interface IInitializeWithdrawal {
    "source": string, 
    "reason": string, 
    "amount": number, 
    "recipient": string
}

export interface IFinalizeWithdrawal {
    "transfer_code": string, 
    "otp": string
}