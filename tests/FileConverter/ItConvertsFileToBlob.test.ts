import FileConverter from "../../src/Converter/FileConverter";
import IFileConverter from "../../src/Converter/IFileConverter";

describe("FileConverter", () => {
    let fileConverter: IFileConverter = new FileConverter();

    beforeEach(() => {
        fileConverter = new FileConverter();
    });

    test("It fails to convert file to blob", () => {

    });

    test("It succeeds to convert file to blob", () => {

    });
});
