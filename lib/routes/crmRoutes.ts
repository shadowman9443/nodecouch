
import {Request, Response} from "express";
import express from 'express';
import { ContactCroller } from '../controller/crmController';



export class Routes{
    public controller:ContactCroller = new ContactCroller(); 
    public routes(app:express.Application): void{
        // app.route('/contact')
        // .get(this.controller.getAllContacts)
        // .post(this.controller.addNewContact);
        // app.route('/contact/:contactId')
        // .get(this.controller.getContacts)
        // .delete(this.controller.deleteContacts);

        app.route("/comapny")
        .post(this.controller.addNewCompany);

    }
}