import {hash, compareHash} from './encrypt';

const generateOTP = async () => {
    const otp = Math.floor(1000 + Math.random() * 9000);

    return otp;
}

const verifyOTP = async (otp: number, dbotp: number) => {
    if(otp === dbotp){
        return true
    }
    else{
        return false
    }
}

export {
    generateOTP,
    verifyOTP
}