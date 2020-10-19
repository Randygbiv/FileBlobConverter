import IBlobFile from "./IBlobFile";

/**
 * Class representing a BlobFile.
 * @class
 * @implements {IBlobFile}
 */
export default class BlobFile implements IBlobFile
{
    /** @inheritdoc */
    public Blob: string;
    /** @inheritdoc */
    public FileType: string;
    /** @inheritdoc */
    public Name: string;
    /** @inheritdoc */
    public Size: number;

    /**
     * Constructs a new BlobFile Object.
     * @param {string} type
     * @param {string} name
     * @param {number} size
     */
    public constructor(type?: string, name?: string, size?: number)
    {
        this.Blob = "";
        this.FileType = type !== undefined ? type : "";
        this.Name = name !== undefined ? name : "";
        this.Size = size !== undefined ? size : 0;
    }
}
