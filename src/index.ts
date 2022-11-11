import "reflect-metadata";
require('dotenv').config();
import express, {Application, NextFunction, Request, Response} from 'express';
import setModuleRouters from './infrastruture/router';
import Server from './infrastruture/config/server'

const app: Application = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req: Request , res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//Routes
setModuleRouters(app)

//Start server 
const server = new Server(app);
server.start()
