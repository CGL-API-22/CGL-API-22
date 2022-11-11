import { Types } from 'mongoose';

export default interface User {
    _id: string,
    firstname?: string,
    lastname?: string,
    phone?: number,
    email?: string,
    email_token?: string,
    password?: string,
    verified?: Types.ObjectId,
    created_at?: Date,
    updated_at: Date
}