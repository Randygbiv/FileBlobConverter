import BlobFile from "../../../src/Models/Blob/BlobFile";
import IBlobFile from "../../../src/Models/Blob/IBlobFile";

describe("BlobFile.ts", () => {
    test("It exists", () => {
        // Arrange
        const blobFile: IBlobFile = new BlobFile();
        // Act
        // Assert
        expect(blobFile).not.toBeUndefined();
        expect(blobFile).not.toBeNull();
    });

    test("It accepts args", () => {
        // Arrange
        const blobFile: IBlobFile = new BlobFile("application/excel", "strangework.xlsx", 434344);
        // Act
        // Assert
        expect(blobFile.FileType).toEqual("application/excel");
        expect(blobFile.Name).toEqual("strangework.xlsx");
        expect(blobFile.Size).toEqual(434344);
    });

    test("It can get or set properties", () => {
        // Arrange
        const blobFile: IBlobFile = new BlobFile();
        // Act
        blobFile.Blob = "ajf;sdkjfh0401ghsdfjklajdf1084t0148hfa;sdkjf141840184";
        blobFile.FileType = "application/excel";
        blobFile.Name = "strangework.xlsx";
        blobFile.Size = 434344;
        // Assert
        expect(blobFile.FileType).toEqual("application/excel");
        expect(blobFile.Name).toEqual("strangework.xlsx");
        expect(blobFile.Size).toEqual(434344);
    });
});
