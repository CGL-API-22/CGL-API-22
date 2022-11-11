import { injectable } from "tsyringe";
import { EmailService, ISendEmailRequest } from "../../../../infrastruture/services/EmailService";
import { generateToken, hash } from "../../../../infrastruture/utils";
import UserRepository from "../../repositories/UsersRepository";


@injectable()
export default class Register{
    constructor(
        private userRepository: UserRepository,
        private emailService: EmailService,
    ){

    }

    async execute(payload: any){
            //check if user email exists 
            const user = await this.userRepository.getUser({email: payload.email});

            //if user email exists
            if(user !== null){
                return "emailExist"
            }

            //check if user phone exists 
            const userphone = await this.userRepository.getUser({phone: payload.phone});

            //if user phone exists
            if(userphone !== null){
                return "phoneExist"
            }

            //encrypt password
            const encryptpassword = await hash(payload.password);
        
            //email token
            const emailToken = await generateToken(payload.email, "vy73fhurf7r9g83hfenuvfnji029f3r8w7gbfru33yfg7r9ffh893fcr4");
            console.log(payload)
            //register user
            const userdata = {
                firstname: payload.firstname,
                lastname: payload.lastname,
                password: encryptpassword,
                email: payload.email,
                email_token: emailToken,
                phone: payload.phone,
                created_at: new Date(),
                updated_at: new Date()
            }

            const createuser = await this.userRepository.addUser(userdata);

            //send email
            const sendEmailPayload: ISendEmailRequest = {
                email: payload.email,
                name: payload.firstname,
                subject: 'Account Verification',
                message: `${payload.url}/?token=${emailToken}`
            }
        
            await this.emailService.sendEmail(sendEmailPayload)

            return createuser
    }
}

