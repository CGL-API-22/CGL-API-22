import { Application } from 'express';
import investorAuthRouter from '../modules/Auth/InvestorRoutes';

export default function setModuleRouters(app: Application): void {

  //Investor
  app.use('/api/v1/auth', investorAuthRouter);
}


