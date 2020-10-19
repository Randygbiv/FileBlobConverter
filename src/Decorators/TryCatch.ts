import { Logger } from "tslog";
const logger: Logger = new Logger();

export function TryCatch ()
{
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        console.log(target);
        try
        {
            target();
        }
        catch (e: any)
        {
            logger.error(`Error while firing ${target}. Error was: ${e}`);
        }
    };
}
