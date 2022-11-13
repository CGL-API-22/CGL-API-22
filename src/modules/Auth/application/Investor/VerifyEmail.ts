import { injectable } from "tsyringe";
import UserRepository from "../../repositories/UsersRepository";

@injectable()
export default class VerifyEmail {
    constructor(
        private userRepository: UserRepository,
    ){}

    async execute(token: string) {
        //check if user exist using email
        const user = await this.userRepository.getUser({email_token: token});
        //returns false if user doesn't exist
        if (!user) {
            return false
        } else {

            // verify user 
            await this.userRepository.updateUser({ email_token: token }, { verified: true })

            return user
        }
    }   
}