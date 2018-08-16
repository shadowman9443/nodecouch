
const ottoman  = require('ottoman');
export const ContactModel = ottoman.model('Customer',{
    customerID: {type:'string', auto:'uuid', readonly:true},
    firstName:'string',
    lastName:'string',
    address:'string',
    email:'string'},{
    index: {
        findByCustomerID:{
            by:'customerID'
           
        },
        findByEmail: {
            by: 'email'
           
        },
        findByFirstName: {
            by: 'firstName'
        },
        findByLastName: {
            by: 'lastName'
        }
    }
});


ContactModel.createAndSave = function (firstname:any, lastname:any, address:any, email:any, done:any) {
    this.create({
        firstName:firstname,
        lastName:lastname,
        address:address,
        email:email,
    }, done);
}




