
import express = require("express");

export class Web64Api
{
    constructor ()
    {}

    public initialise(): void
    {
        const api = express();

        api.get('/users', (req, res) => {
            return res.send({ id: "123", name: "Test User" });
        });

        api.listen(8064, () =>
            console.log(`Example app listening on port 8064!`),
        );
    }
}