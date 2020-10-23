import IFileConverter from "../../src/Converter/IFileConverter";
import Converter from "../TestClasses/TestFileConverter";

describe("FileConverter.ts", () => {
    test("It exists", () => {
        // Arrange
        const c: IFileConverter = new Converter(new FileReader());
        // Act
        // Assert
        expect(c).not.toBeNull();
        expect(c).not.toBeUndefined();
    });
});
