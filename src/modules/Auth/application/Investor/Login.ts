import { injectable } from "tsyringe";
import { compareHash, generateToken, hash } from "../../../../infrastruture/utils";
import UserRepository from "../../repositories/UsersRepository";

@injectable()
export default class Login{
    constructor(
        private userRepository: UserRepository,
    ){

    }

    
    async execute(email: string, password: string){

        //check if user exists
        const user = await this.userRepository.getUser({email: email});

        if(user === null){
            return false
        }

        //check if user is verified
        if (user.verified) {
            return false
        }

        //compare encrypted password
        const checkpassword = await compareHash(password, user.password)
    
        if(!checkpassword){
            return false
        }

        //generate user token for authorization
        const userdetails = {
            firstname: user.firstname,
            id: user._id,
            email: user.email
        }

        const Token = await generateToken(userdetails, "vy73fhurf7r9g83hfenuvfnji029f3r8w7gbfru33yfg7r9ffh893fcr4");

        //send email notification

        
        return {
            token: Token,
            firstname: user.firstname,
            id: user._id,
            email: user.email
        }

    }
}

