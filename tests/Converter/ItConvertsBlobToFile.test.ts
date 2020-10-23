import IFileConverter from "../../src/Converter/IFileConverter";
import BlobFile from "../../src/Models/Blob/BlobFile";
import IBlobFile from "../../src/Models/Blob/IBlobFile";
import IFile from "../../src/Models/File/IFile";
import Converter from "../TestClasses/TestFileConverter";

describe("FileConverter.ts", () => {
    const c: IFileConverter = new Converter(new FileReader());

    test("It succeeds to convert binary string to file", async(done) => {
        // Arrange
        const b: IBlobFile = new BlobFile("image/jpg", "image.jpg", 10);
        b.BinaryString = "this is a test string";
        // Act
        const file: IFile = c.ConvertBlobToFile(b);
        // Assert
        expect(file.size).toBeCloseTo(Math.floor(file.arrayBuffer.byteLength / 2));
        expect(file.name).toEqual(b.Name);
        expect(file.type).toEqual(b.FileType);
        done();
    });
});
