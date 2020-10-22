import IFile from "../../src/Models/File/IFile";

export default class File implements IFile
{
    public arrayBuffer: ArrayBuffer = new ArrayBuffer(5644);
    public lastModifiedDate: Date = new Date();
    public name: string = "test.jpg";
    public size: number = 5644;
    public type: string = "image/jpg";
    public webkitRelativePath: string = "";

}
