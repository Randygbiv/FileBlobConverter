import {TryCatch} from "../../../src/Decorators/TryCatch";

describe("TryCatch.ts", () => {
    test("It tries and catches", () => {
        // Arrange
        const func: any = function(){return 1+1; };
        // Act
        @TryCatch()
        func();
        // Assert
    });
});
