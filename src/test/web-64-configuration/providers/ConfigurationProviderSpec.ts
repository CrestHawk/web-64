import chai = require("chai");
import { it } from "mocha";
import{ ConfigurationProvider} from "../../../web-64-configuration/providers/ConfigurationProvider";

let configuration: Web64Configuration;
let configProvider: IConfigurationProvider;

describe("ConfigurationProvider Tests", () =>
{
    before(() =>
    {
        configProvider = new ConfigurationProvider();

        configuration = configProvider.getConfiguration();
    });

    describe("getConfiguration", () =>
    {
        it("Should return an initialised configuration object", () => 
        {
            chai.expect(configuration).to.not.be.undefined;
            chai.expect(configuration).to.not.be.null;
        });

        it("Which should have a database object", () => 
        {
            chai.expect(configuration).to.have.property("database");
        });

        it("With an application", () => 
        {
            chai.expect(configuration.database).to.have.property("application");
        });

        it("And a host", () => 
        {
            chai.expect(configuration.database).to.have.property("host");
        });

        it("And a port", () => 
        {
            chai.expect(configuration.database).to.have.property("port");
        });
    });
});