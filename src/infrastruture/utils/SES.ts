import AWS from 'aws-sdk';
import { injectable } from 'tsyringe';

@injectable()
export default class Emailer {

    accessKeyId?: string;
    secretAccessKey?: string;
    region?: string;

    AWS_SES?: any;

    

    constructor(
        accessKeyId: string,
        secretAccessKey: string,
        region: string
    ){
        AWS.config.update({region: 'us-east-1'});
        this.AWS_SES = new AWS.SES({accessKeyId, secretAccessKey, region})
    }

    sendEmail(recipientEmail: string, recipientName: string) {
        let params = {
            Source: 'deborah@sunglo.io',
            Destination: {
              ToAddresses: [
                recipientEmail
              ],
            },
            ReplyToAddresses: [],
            Message: {
              Body: {
                Html: {
                  Charset: 'UTF-8',
                  Data: '',
                },
              },
              Subject: {
                Charset: 'UTF-8',
                Data: `Hello, ${recipientName}!`,
              }
            },
          };

          return this.AWS_SES.sendEmail(params).promise();
    }

    sendTemplateEmail(payload: IEmail, otp: string) {
      var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).getTemplate({TemplateName: 'ExampleTemplate'}).promise();
      
      templatePromise.then(
        (data) => {
        let params = {
          Source: 'deborah@sunglo.io',
          Template: data.Template?.TemplateName,
          Destination: {
            ToAddresses: [
              'maceteligolden@gmail.com'
            ],
          },
          ReplyToAddresses: [],
          TemplateData: `{ \"name\":\"${otp}\"}`
          
          };
          
        return this.AWS_SES.sendTemplatedEmail(params).promise();
        }).catch(
          function(err) {
          console.error(err, err.stack);
        });

    }

}

export interface IEmail {
  template: string,
  receiverAddress: string
}


