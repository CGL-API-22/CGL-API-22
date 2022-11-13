import { injectable } from "tsyringe";
import { hash } from "../../../../infrastruture/utils";
import UserRepository from "../../repositories/UsersRepository";

@injectable()
export default class Changepassword {
    constructor(
        private userRepository: UserRepository,
    ){

    }

    async execute(payload: any){
        const encryptpassword = await hash(payload.password);

        const Changepassword = await this.userRepository.updateUser({email_token: payload.token}, {password: encryptpassword});
        return Changepassword
    }
}