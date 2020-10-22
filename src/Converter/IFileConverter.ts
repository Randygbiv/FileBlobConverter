import IBlobFile from "../Models/Blob/IBlobFile";
import IFile from "../Models/File/IFile";
import IFileReader from "../Models/File/IFileReader";

/**
 * Interface for a converter service.
 * @interface
 */
export default interface IFileConverter
{

    /**
     * Converts a binary string back to a file
     * @param {IBlobFile} blob
     * @returns {IFile}
     */
    ConvertBlobToFile(blob: IBlobFile): IFile;

    /**
     * Converts a web File object into a blob object.
     * @param {IFile} file
     * @param {IFileReader} fileReader
     * @returns {Promise<IBlobFile>}
     */
    ConvertFileToBlobFile(file: IFile, fileReader: IFileReader): Promise<IBlobFile>;
}
