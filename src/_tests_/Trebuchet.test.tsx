import calibrator from "../AdventFunctions/Trebuchet";

describe ('Calibrator', () => {
    test('Should take a string and return its length', () => {
        const testItem : string = "test";
        const result : number = calibrator(testItem);
        expect(result).toEqual(4);
    });
})