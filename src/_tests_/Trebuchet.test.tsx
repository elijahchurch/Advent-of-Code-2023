import {calibrator, findFirstNumber, findLastNumber, pullCalibrationValues} from "../AdventFunctions/Trebuchet";
import { testData } from "../testData";

describe ('Calibrator', () => {
    test('findFirstNumber loops through a string and finds pulls first number', () => {
        const result = findFirstNumber("ft5nm8");
        expect(result).toEqual("5");
    });

    test('findLastNumber loops through a string and finds the last number', () => {
        const result = findLastNumber("ft5nm8");
        expect(result).toEqual("8");
    })

    test('pullCalibrationValues should return an array of the concated first and last numbers', () => {
        const result = pullCalibrationValues(["ft5nm8"]);
        expect(result).toEqual([58]);
    })
})