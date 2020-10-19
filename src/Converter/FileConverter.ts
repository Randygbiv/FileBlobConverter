import BlobFile from "../Models/Blob/BlobFile";
import IBlobFile from "../Models/Blob/IBlobFile";
import IFile from "../Models/File/IFile";
import IFileConverter from "./IFileConverter";

export default class FileConverter implements IFileConverter
{
    /** @inheritdoc */
    public ConvertFileToBlobFile(file: IFile): IBlobFile
    {
        const blob: IBlobFile = new BlobFile();

        return blob;
    }
}
