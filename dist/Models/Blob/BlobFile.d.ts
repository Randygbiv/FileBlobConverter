import IBlobFile from "./IBlobFile";
/**
 * Class representing a BlobFile.
 * @class
 * @implements {IBlobFile}
 */
export default class BlobFile implements IBlobFile {
    /** @inheritdoc */
    BinaryString: string;
    /** @inheritdoc */
    FileType: string;
    /** @inheritdoc */
    Name: string;
    /** @inheritdoc */
    Size: number;
    /**
     * Constructs a new BlobFile Object.
     * @param {string} type
     * @param {string} name
     * @param {number} size
     */
    constructor(type?: string, name?: string, size?: number);
}
