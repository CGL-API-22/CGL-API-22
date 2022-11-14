import { Application } from "express"
import { connect } from "../utils"

export default class Server {

    app: Application

    constructor(app: Application){
        this.app = app
    }

    async start(){
        try{
  
            //connecting to mongodb
            connect()
        
            const port: string = process.env.PORT || "5000"
        
            this.app.listen(port, () => { console.log(`listening to port ${port}`)});

            setTimeout(()=>{
                console.log(process.memoryUsage())
            }, 5000)
            
        
          }catch(error){
        
            console.log(error)
        
        }
    }
}