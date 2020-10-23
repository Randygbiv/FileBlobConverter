import IBlobFile from "../Models/Blob/IBlobFile";
import IFile from "../Models/File/IFile";
import IFileReader from "../Models/File/IFileReader";
import IFileConverter from "./IFileConverter";
/**
 * File converter class. Class that the user can use to create
 */
export default abstract class FileConverter implements IFileConverter {
    /** @inheritdoc */
    ConvertBlobToFile(blob: IBlobFile): IFile;
    /** @inheritdoc */
    ConvertFileToBlobFile(file: IFile, fileReader: IFileReader): Promise<IBlobFile>;
    private ConvertStringToBufferArray;
}
