export class CachedConfigurationProvider implements IConfigurationProvider
{
    private configuration: Web64Configuration;

    constructor(private configProvider: IConfigurationProvider)
    {}

    public getConfiguration(): Web64Configuration
    {
        if (this.configuration === null || this.configuration === undefined)
        {
            this.configuration = this.configProvider.getConfiguration();
        }

        return this.configuration;
    }
}