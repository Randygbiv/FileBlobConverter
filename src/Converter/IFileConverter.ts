import IBlobFile from "../Models/Blob/IBlobFile";
import IFile from "../Models/File/IFile";

export default interface IFileConverter
{
    /**
     * Converts a web File object into a blob object.
     * @param {string} file
     */
    ConvertFileToBlobFile(file: IFile): IBlobFile;
}
