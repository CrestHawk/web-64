import chai = require("chai");
import sinon = require("sinon");
import sinonChai = require("sinon-chai");
import { describe } from "mocha";
chai.use(sinonChai);

import { CachedConfigurationProvider } from "../../../web-64-configuration/providers/CachedConfigurationProvider";
import { MockConfigurationProvider } from "../../mocks/web-64-configuration/providers/MockConfigurationProvider";

let cachedConfigProvider: IConfigurationProvider;
let mockConfigProvider;

let internalProviderSpy: sinon.SinonSpy;

describe("Cached Configuration Provider Tests", () =>
{
    beforeEach(() =>
    {
        mockConfigProvider = new MockConfigurationProvider();

        internalProviderSpy = sinon.spy(mockConfigProvider, "getConfiguration");

        cachedConfigProvider = new CachedConfigurationProvider(mockConfigProvider);
    });

    describe("When called once", () =>
    {
        let config: Web64Configuration;

        beforeEach(() =>
        {
            config = cachedConfigProvider.getConfiguration();
        });


        describe("The cached config provider", () =>
        {
            it("Should only call the internal provider for the config once", () =>
            {
                chai.expect(internalProviderSpy).to.have.been.calledOnce;
            });

            it("And should return teh Web64 Configuration", () =>
            {
                chai.expect(config).to.not.be.null;
                chai.expect(config).to.not.be.undefined;
            });
        });
    });

    describe("When called twice", () =>
    {
        let config: Web64Configuration;

        beforeEach(() =>
        {
            config = cachedConfigProvider.getConfiguration();
            config = cachedConfigProvider.getConfiguration();
        });

        describe("The cached config provider", () =>
        {
            it("Should only call the internal provider for the config once", () =>
            {
                chai.expect(internalProviderSpy).to.have.been.calledOnce;
            });

            it("And should return teh Web64 Configuration", () =>
            {
                chai.expect(config).to.not.be.null;
                chai.expect(config).to.not.be.undefined;
            });
        });
    });
});