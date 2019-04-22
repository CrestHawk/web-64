
import express = require("express");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

export class Web64Api
{
    private db: any; 

    constructor ()
    {}

    public initialise(): void
    {
        const api = express();
        api.use(bodyParser());

        this.initMongo();

        api.get('/users', (req, res) => {
            return res.send({ id: "123", name: "Test User" });
        });

        api.post('/users', (req, res) => {
            this.insertUser(req.body);
            return res.send(req.body);
        });

        api.listen(8064, () =>
            console.log(`Example app listening on port 8064!`),
        );
    }

    private initMongo(): void
    {
        // Connection URL
        const url = 'mongodb://localhost:27017';
        
        // Database Name
        const dbName = 'web-64';
        
        // Use connect method to connect to the server
        MongoClient.connect(url, (err: Error, client: any) => {
            console.log("Connected successfully to server");
            
            this.db = client.db(dbName);
        });
    }

    private insertUser(user: any): void
    {
        // Get the documents collection
        const collection = this.db.collection('web-64-users');
        
        // Insert some documents
        collection.insertMany([
          user
        ], (err: Error, result: any) => {

        });
      }
}