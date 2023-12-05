import {calibrator, findFirstNumber, findLastNumber, pullCalibrationValues} from "../AdventFunctions/Trebuchet";
import { testData } from "../testData";
import { data } from "../data/TrebuchetData";

describe ('Calibrator', () => {
    // test('findFirstNumber loops through a string and finds pulls first number', () => {
    //     const result = findFirstNumber(["a","5","8"]);
    //     expect(result).toEqual("5");
    // });

    // test('findLastNumber loops through a string and finds the last number', () => {
    //     const result = findLastNumber(["f","t", "5", "n", "m", "8"]);
    //     expect(result).toEqual("8");
    // })

    test('pullCalibrationValues should return an array of the concated first and last numbers', () => {
        const result = pullCalibrationValues(["ft5nm8"]);
        expect(result).toEqual([58]);
    })

    test('pullCalibrationValues should return an array of numbers from an array of strings', () => {
        const result = pullCalibrationValues(["ft5nm8", "6b5aa", "a5si"]);
        expect(result).toEqual([58, 65, 55]);
    }
    )

    test('pullCalibrationValues should return an array of numbers correct if a substring number shows up in the data set', () => {
        const result = pullCalibrationValues(["ft5nm8", "one5two", "five"]);
        expect(result).toEqual([58, 12, 55])
    })

    test('check', () => {
        const result = calibrator(["zoneight"]);
        expect(result).toEqual(18)
    })

    test('calibrator should add an all numbers together that were created from pullCalibrationValues', () => {
        const result = calibrator(testData);
        expect(result).toEqual(182);
    })

    test("RESULT!!", () => {
        const result = calibrator(data);
        expect(result).toEqual(1000);
    })
})