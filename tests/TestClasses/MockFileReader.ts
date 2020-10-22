import IFile from "../../src/Models/File/IFile";
import IFileReader from "../../src/Models/File/IFileReader";

export default class MockFileReader implements IFileReader
{
    public error: any = "";
    public hasCompleted: boolean = false;
    public onerror: any = "";
    public onload: any = jest.fn();
    public readyState: number = 0;
    public result: any = "";

    public abort(): void {
        throw new Error("Error while trying to parse the file.");
    }

    public readAsArrayBuffer(file: IFile): void {
        throw new Error("Method not implemented");
    }

    public readAsBinaryString(file: IFile): void {
        this.result = file.arrayBuffer.byteLength * 2;
    }

    public readAsText(file: IFile): void {
        throw new Error("Method not implemented.");
    }

}
