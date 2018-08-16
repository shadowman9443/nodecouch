var couchbase = require("couchbase");
var ottoman = require("ottoman");
var cluster = new couchbase.Cluster("couchbase://127.0.0.1");
cluster.authenticate("Administrator", "123456");
var bucket = cluster.openBucket("notes");
//ottoman.store = new ottoman.CbStoreAdapter(bucket, ottoman);
ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase);
export const CompanyMdl = ottoman.model("Company", {
    createdON: { type: "Date", default:new Date() },
    name: "string",
    address: {
        street: "string",
        city: "string",
        state: "string",
        zip: "integer",
        country: { type: "string", default: "USA" }
    }
}, {
    index: {
        findByCompanyName: {
            by: "name",
            type: "refdoc"
        }
    }
});