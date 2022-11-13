import { injectable } from "tsyringe";
import axios from 'axios';

export interface ISendEmailResponse {
  id: string;
  subject: string;
  email: string;
  status: string;
}

export interface ISendEmailRequest {
  email: string;
  name: string;
  subject: string;
  message: string;
}

@injectable()
export class EmailService {
  constructor() {}

  async sendEmail(args: ISendEmailRequest): Promise<ISendEmailResponse> {
    const response = await axios.post(
      'https://api.sendchamp.com/api/v1/email/send',
      {
        to: [{ email: args.email, name: args.name }],
        message_body: {
          type: 'text/html',
          value: `<h1>${args.message}</h1>`,
        },
        subject: args.subject,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer sendchamp_live_$2a$10$ucfd4uEYMnnd93PEXJ5ikeGy2BEXaC9U5Se4Qhe5SDBq7ibdvadEi',
        },
      },
    );

    return response.data;
  }
}
