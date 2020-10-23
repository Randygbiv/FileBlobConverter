# FileBlobConverter

*Project offers a clean and concise way to convert files to blobs for databases storage. The project will grant the ability to convert excel, word documents, images, etc into blob files for storage. It will also offer a method for the user convert those blobs back. The blob can be converted back, but if not converted back into it's file type, could cause potential issues.*


## Usage

*The module can be used in multiple ways. The primary function is to convert files to and from binaryBlob ojects for storage. There are several models and interfaces, but only two public methods on a single service class.*

### Installation
***
```bash
npm i file-blob-converter --save
```

### Models
***
IFile as per Browser File Object
```javascript
export default interface IFile
{
    arrayBuffer: ArrayBuffer;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
```

IFileReader as per Browser File Reader
```javascript
export default interface IFileReader
{
    error: any;
    onerror: any;
    onload: any;
    readyState: number;
    result: any;
    abort(): void;
    readAsArrayBuffer(file: IFile): void;
    readAsBinaryString(file: IFile): void;
    readAsText(file: IFile): void;
}
```

IBlob as per the Browser Blob
```javascript
export default interface IBlob
{
    size: number;
    type: string;
    arrayBuffer(): ArrayBuffer;
    slice(): IBlob;
    stream(): any;
    text(): any;
}
```

IBlobFile (specific to this module)
```javascript
export default interface IBlobFile
{
    BinaryString: string;
    FileType: string;
    Name: string;
    Size: number;
}
```

### File Converter
***

*This is the core repsonsibility of the module. The purpose is so that we can use this to convert files. Below is the interface, then an example of how to use the abstract class.*

```javascript
export default interface IFileConverter
{
    ConvertBlobToFile(blob: IBlobFile): IFile;
    ConvertFileToBlobFile(file: IFile): Promise<IBlobFile>;
}
```

#### Using the FileConverter

*All examples are written in typescript*

First, implement a concrete version of the abstract class.

```javascript
import FileConverter from "fileblobconverter"

export default class Converter extends FileConverter
{
    private readonly _util: IUtil; //user implemented

    public constructor(util: IUtil)
    {
        super();
        _util = util;
    }

    // user implemented method
    public DoUtilThing()
    {
        // do user implemented things.
    }
}
```

To convert a file to a binary blob
```javascript
import Converter from "../users/concrete/class/path";

// function to handle file event
public File(e: event)
{
    const c: IFileConverter = new Converter();
    const b: IBlobFile = c.ConvertFileToBlobFile(e.target.file[0]);
    axios.post("/crud/api/path", b)
        .then((data: any) => data)
        .catch((err) => logger.error(`Message: ${err}`));
}
```

To convert a BlobFile to a file
```javascript
import Converter from "../users/concrete/class/path";

// function to download file from DB
public DownloadFile(id: number)
{
    const fileFromDb: IBlobFile = axios.get(`/crud/api/path/${id}`)
        .then((data: IBlobFile) => data)
        .catch((err) => logger.error(`Message: ${err}`));
    const c: IFileConverter = new Converter();
    const urlObj = new Blob(
        [c.ConvertBlobToFile(fileFromDb).arrayBuffer], 
        {type: c.ConvertBlobToFile(fileFromDb).type}
    );
    window.open(urlObj);
}
```

## Change Log
***
* 10-23-2020 | Abstracted FileReader away from the user, still passible on constructor.

## Contribution Guide
***
Please refeer to the styles in the tslint file within the project. The linter, if using one that supports typescript, will tell you what the rules from tslint area. Outside of that follow the below.

* Check the existing issues and checkout one of those first
* If the issue doesn't exist, file an issue
* Fork the repo and start working on it
* Ensure that you have at least 65% code coverage
* Create pull request
