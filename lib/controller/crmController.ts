import { Request, Response } from "express";
// import { ContactModel } from "../models/contactModels";
import { CompanyMdl } from "../models/company";
var ottoman = require("ottoman");
var couchbase = require("couchbase");
var cluster = new couchbase.Cluster("couchbase://127.0.0.1");
cluster.authenticate("Administrator", "123456");
var bucket = cluster.openBucket("notes");
ottoman.store = new ottoman.CbStoreAdapter(bucket, ottoman);
// ottoman.bucket = bucket;
//  ottoman.ensureIndices(function(err:any) {
//    if (err) return console.error(err);
//  });
var N1qlQuery = require("couchbase").N1qlQuery;

export class ContactCroller {
  //POST single data
  // public addNewContact(req: Request, res: Response) {
  //   // let newContact = new ContactModel(req.body.firstname,req.body.lastname);
  //   let newContact = new ContactModel();
  //   let document = {
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname
  //   };
  //   console.log("ji:" + req.params.contactId);

  //   newContact.createAndSave(
  //     req.body.firstName,
  //     req.body.lastName,
  //     req.body.address,
  //     req.body.email,
  //     function(err:any, done:any) {
  //       if (err) {
  //        // res.status = 400;
  //         res.send(err.toString());
  //         return;
  //       }

  //   //    res.status = 201;
  //       res.send(done);
  //       return;
  //     }
  //   );

  //   // bucket.upsert(req.params.contactId, document, function(
  //   //   error: any,
  //   //   result: any
  //   // ) {
  //   //   if (error) {
  //   //     res.send(error);
  //   //     console.log(error);
  //   //   }
  //   //   res.send(result);
  //   // });
  // }
  // //GET single data
  // public getContacts(req: Request, res: Response) {
  //   // bucket.get(req.params.contactId, function(error: any, result: any) {
  //   //   if (error) {
  //   //     res.send(error);
  //   //   }
  //   //   res.send(result);
  //   // });
  // }
  // public getAllContacts(req: Request, res: Response) {
  //   var query = N1qlQuery.fromString(
  //     "SELECT firstname, lastname FROM `notes` "
  //   ).consistency(N1qlQuery.Consistency.REQUEST_PLUS);
  //   //var query = N1qlQuery.fromString("SELECT META().id  FROM `notes` ").consistency(N1qlQuery.Consistency.REQUEST_PLUS);

  //   // bucket.query(query, function(error: any, result: any) {
  //   //   if (error) {
  //   //     console.log("inside err");
  //   //     console.log(error);
  //   //     return;
  //   //   }
  //   //   console.log("No error in NIQL");
  //   //   res.send(result);
  //   // });
  // }
  // public deleteContacts(req: Request, res: Response) {
  //   // bucket.remove(req.params.contactId, function(error: any, result: any) {
  //   //   if (error) {
  //   //     res.send(error);
  //   //   }
  //   //   res.send(result);
  //   // });
  // }

  public async  addNewCompany(req: Request, res: Response) {
    let newContact = new CompanyMdl({
      name: req.body.name,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
        zip: req.body.address.zip,
        country: req.body.address.country
      }
    });
    // newContact.save(function(error: any, result: any) {
    //   if (error) {
    //     return res.status(400).send(error);
    //   }
    //   res.send(req.body);
    // });
    try{
         let contact = await newContact.save();
         res.send(contact);
    }catch(err){
        
    }
  }
}
