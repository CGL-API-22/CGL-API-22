import {Response} from 'express'

export default interface ServerResponse {
    res: Response
    statuscode: number,
    message: string,
    data?: any
}