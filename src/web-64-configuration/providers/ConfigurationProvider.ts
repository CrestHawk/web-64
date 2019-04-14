import { ConfigurationConstants } from "../../constants/configuration/ConfigurationConstants";

export class ConfigurationProvider implements IConfigurationProvider
{
    public getConfiguration(): Web64Configuration
    {
        const config: Web64Configuration = require(ConfigurationConstants.ConfigRelativePath);
        return config;
    }
}