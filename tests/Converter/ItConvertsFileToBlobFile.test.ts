import IFileConverter from "../../src/Converter/IFileConverter";
import BlobFile from "../../src/Models/Blob/BlobFile";
import IBlobFile from "../../src/Models/Blob/IBlobFile";
import IFile from "../../src/Models/File/IFile";
import IFileReader from "../../src/Models/File/IFileReader";
import File from "../TestClasses/MockFile";
import MockFileReader from "../TestClasses/MockFileReader";
import Converter from "../TestClasses/TestFileConverter";

describe("FileConverter.ts", () => {
    const c: IFileConverter = new Converter(new FileReader());

    test("It converts file to blob object", () => {
        // Arrange
        const f: IFile = new File();
        const r: IFileReader = new MockFileReader();
        // Act
        const bond: any = jest.spyOn(r, "onload");
        // Assert

        expect(c.ConvertFileToBlobFile(f))
            .resolves.toBeInstanceOf(new BlobFile());
        expect(r.onload).not.toEqual(jest.fn());
    });
});
