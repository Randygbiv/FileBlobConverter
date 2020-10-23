"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class representing a BlobFile.
 * @class
 * @implements {IBlobFile}
 */
var BlobFile = /** @class */ (function () {
    /**
     * Constructs a new BlobFile Object.
     * @param {string} type
     * @param {string} name
     * @param {number} size
     */
    function BlobFile(type, name, size) {
        this.BinaryString = "";
        this.FileType = type !== undefined ? type : "";
        this.Name = name !== undefined ? name : "";
        this.Size = size !== undefined ? size : 0;
    }
    return BlobFile;
}());
exports.default = BlobFile;
