    export default interface IFile
    {
        /**
         * ArrayBuffer of the data of the file. It will be used for parsing the file
         * @type {ArrayBuffer}
         */
        arrayBuffer: ArrayBuffer;

        /**
         * Date that the file was last modified
         * @type {Date}
         */
        lastModifiedDate: Date;

        /**
         * Name of the file. Exp: 'image.jpg'
         * @type {string}
         */
        name: string;

        /**
         * Number of bytes or the size of the file.
         * @type {number}
         */
        size: number;

        /**
         * The type of the file. Example: 'image/jpg'
         * @type {string}
         */
        type: string;

        /**
         * The webkitRelativePath is the path to the file via the web.
         * @type {string}
         */
        webkitRelativePath: string;
    }
