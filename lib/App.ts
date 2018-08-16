import  express from "express";
import  bodyParser from "body-parser";
import couchbase from "couchbase";
import { Routes } from './routes/crmRoutes';
import { Bucket } from 'couchbase';

 class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

     public cluster = new couchbase.Cluster('couchbase://127.0.0.1');
     public bucket = this.cluster.openBucket('notes');
   

    constructor() {
        this.app = express();
        this.config();
     
   
        this.routePrv.routes(this.app);   
        this.couchbaseSetUp();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        
    }
    public couchbaseSetUp():void{
   
        this.cluster.authenticate("Administrator", "123456");
   
        this.bucket.operationTimeout = 5000;
   
    }
    // private couchbaseSetUp():{
    //     let cluster = new couchbase.Cluster("couchbase://localhost");
    //  //   cluster.authenticate('Administrator', '123456');
    //     let bucket = cluster.openBucket("default");
    //     retun bucket;
    // }
  
}

export default new App().app;


