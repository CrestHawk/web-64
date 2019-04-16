export class MockConfigurationProvider implements IConfigurationProvider
{
    public getConfiguration(): Web64Configuration
    {
        return {
            database: {
                application: "",
                host: "",
                port: ""
            }
        };
    }
}