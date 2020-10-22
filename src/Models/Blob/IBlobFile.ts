export default interface IBlobFile
{
    /**
     * String version of the blob, to be stored and converted back.
     * @type {string}
     */
    BinaryString: string;

    /**
     * Name of the file type, to be stored and help in converting the file back.
     * @type {string}
     */
    FileType: string;

    /**
     * Name of file. To be stored and help with the conversion back.
     * @type {string}
     */
    Name: string;

    /**
     * Size of the file itself. Information for the file.
     * @type {number}
     */
    Size: number;
}
