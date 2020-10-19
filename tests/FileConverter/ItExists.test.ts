import FileConverter from "../../src/Converter/FileConverter";
import IFileConverter from "../../src/Converter/IFileConverter";

describe("FileConverter", () => {
    test("It Exists", () => {
        // Arrange
        const converter: IFileConverter = new FileConverter();
        // Act
        // Assert
        expect(converter).not.toBeNull();
        expect(converter).not.toBeUndefined();
    });
});
