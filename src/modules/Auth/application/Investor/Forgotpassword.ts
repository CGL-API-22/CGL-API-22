import { injectable } from "tsyringe";
import UserRepository from "../../repositories/UsersRepository";
import { EmailService, ISendEmailRequest } from "../../../../infrastruture/services/EmailService";

@injectable()
export default class Forgotpassword {
    constructor(
        private userRepository: UserRepository,
        private emailService: EmailService,
    ){

    }

    async execute(email: string, url: string){
        //check if user exist using email
        const user = await this.userRepository.getUser({email: email});

        //returns false if user doesn't exist
        if(user === null){
            return false
        }

        //send email
        const sendEmailPayload: ISendEmailRequest = {
            email: user.email,
            name: user.firstname,
            subject: 'Account Verification',
            message: `${url}/?token=${user.email_token}`
        }
    
        await this.emailService.sendEmail(sendEmailPayload)

        return user
    }   
}