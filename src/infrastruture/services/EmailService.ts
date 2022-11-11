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
        from: { email: 'info@coronamgroup', name: 'Coronamgroup' },
        message_body: {
          type: 'text/html',
          value: args.message,
        },
        subject: args.subject,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer Authcode`,
        },
      },
    );

    return response.data;
  }
}
