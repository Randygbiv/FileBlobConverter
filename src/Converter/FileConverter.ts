import BlobFile from "../Models/Blob/BlobFile";
import IBlobFile from "../Models/Blob/IBlobFile";
import IFile from "../Models/File/IFile";
import IFileReader from "../Models/File/IFileReader";
import IFileConverter from "./IFileConverter";

/**
 * File converter class. Class that the user can use to create
 */
export default abstract class FileConverter implements IFileConverter
{
    /** @inheritdoc */
    public ConvertBlobToFile(blob: IBlobFile): IFile
    {
        return {
            arrayBuffer: this.ConvertStringToBufferArray(blob.BinaryString),
            lastModifiedDate: new Date(),
            name: blob.Name,
            size: blob.Size,
            type: blob.FileType,
            webkitRelativePath: ""
        };
    }

    /** @inheritdoc */
    public async ConvertFileToBlobFile(file: IFile, fileReader: IFileReader): Promise<IBlobFile>
    {
        return new Promise((resolve, reject) => {
            fileReader.onerror = () => {
                fileReader.abort();
                reject();
            };

            fileReader.onload = async () => {
                const b:IBlobFile = new BlobFile(file.type, file.name, file.size);
                b.BinaryString = fileReader.result;
                resolve(b);
            };

            fileReader.readAsBinaryString(file);
        });
    }

    private ConvertStringToBufferArray(str: string): ArrayBuffer
    {
        const buffer: ArrayBuffer = new ArrayBuffer(str.length);
        const uInt: Uint8Array = new Uint8Array(buffer);
        // tslint:disable-next-line: binary-expression-operand-order
        for (let i: number = 0; 0 <= str.length ? i < str.length : i > str.length; i = 0 <= str.length ? ++ i : --i) {
            uInt[i] = String.prototype.charCodeAt.call(str, i);
        }

        return uInt.buffer;
    }
}
