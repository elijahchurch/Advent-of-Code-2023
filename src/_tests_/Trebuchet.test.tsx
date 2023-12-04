import {calibrator, findFirstNumber, findLastNumber, pullCalibrationValues} from "../AdventFunctions/Trebuchet";
import { testData } from "../testData";

describe ('Calibrator', () => {
    test('findFirstNumber loops through a string and finds pulls first number', () => {
        const result = findFirstNumber(["a","5","8"]);
        expect(result).toEqual("5");
    });

    test('findLastNumber loops through a string and finds the last number', () => {
        const result = findLastNumber(["f","t", "5", "n", "m", "8"]);
        expect(result).toEqual("8");
    })

    test('pullCalibrationValues should return an array of the concated first and last numbers', () => {
        const result = pullCalibrationValues(["ft5nm8"]);
        expect(result).toEqual([58]);
    })

    test('pullCalibrationValues should return an array of numbers from an array of strings', () => {
        const result = pullCalibrationValues(["ft5nm8", "6b5aa", "afour5six"]);
        expect(result).toEqual([58, 65, 55]);
    }
    )

    test('calibrator should add an all numbers together that were created from pullCalibrationValues', () => {
        const result = calibrator(testData);
        expect(result).toEqual(182);
    })
})