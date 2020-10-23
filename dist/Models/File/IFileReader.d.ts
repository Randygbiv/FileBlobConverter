import IFile from "./IFile";
/**
 * Interface for the MDN Browser FileReader
 */
export default interface IFileReader {
    /**
     * Error must be any data type.
     * @type {any}
     */
    error: any;
    /**
     * On error event must be any data type.
     * @type {any}
     * @event
     */
    onerror: any;
    /**
     * On load event that is handled once the file is loaded.
     * @type {any}
     * @event
     */
    onload: any;
    /**
     * State of if the data is ready. The ready state is a number constant.
     * @type {number}
     */
    readyState: number;
    /**
     * Result of the reading of the file must be any type because there are multiple returns
     * from methods that will be their data.
     * @type {ArrayBuffer, String}
     */
    result: any;
    /**
     * Method that aborts the file read
     * @returns {void}
     */
    abort(): void;
    /**
     * The method reads the data of the passed in file as an ArrayBuffer
     * The method changes the result value on the class.
     * @param {IFile} file
     * @returns {void}
     */
    readAsArrayBuffer(file: IFile): void;
    /**
     * The method reads the data of the file as a BinaryString
     * @param {IFile} file
     * @returns {void}
     */
    readAsBinaryString(file: IFile): void;
    /**
     * The method reads the data of the passed file as basic text.
     * This method is for text files (.txt)
     * @param {IFile} file
     * @returns {void}
     */
    readAsText(file: IFile): void;
}
