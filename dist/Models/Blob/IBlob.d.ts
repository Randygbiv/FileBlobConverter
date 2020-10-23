export default interface IBlob {
    /**
     * Number value representing the size of the file.
     * @type {number}
     */
    size: number;
    /**
     * String value representing the type of the file.
     * Example: 'image/jpg'
     * @type {string}
     */
    type: string;
    /**
     * Method that buffers the data.
     * @returns {ArrayBuffer}
     */
    arrayBuffer(): ArrayBuffer;
    /**
     * Method that returns an IBlob off the original IBlob
     * @returns {IBlob}
     */
    slice(): IBlob;
    /**
     * Method that returns a stream of data.
     */
    stream(): any;
    /**
     * Method that returns text of the data;
     */
    text(): any;
}
