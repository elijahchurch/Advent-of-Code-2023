import {calibrator, findFirstNumber, pullCalibrationValues} from "../AdventFunctions/Trebuchet";
import { testData } from "../testData";

describe ('Calibrator', () => {
    test('findFirstNumber loops through a string and finds pulls first number', () => {
        const result = findFirstNumber("ft5nm8");
        expect(result).toEqual(5);
    });
})