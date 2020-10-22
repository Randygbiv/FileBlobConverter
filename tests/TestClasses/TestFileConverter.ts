import FileConverter from "../../src/Converter/FileConverter";
import IFileConverter from "../../src/Converter/IFileConverter";

export default class Converter extends FileConverter implements IFileConverter
{
    public constructor()
    {
        super();
    }
}
