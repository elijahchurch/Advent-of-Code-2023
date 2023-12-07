import { setAnalyzer } from "../AdventFunctions/CubeProbability"

describe ('CubeProbability', () => {
    test('Sequence Analyzer returns a boolean', () => {
        expect(typeof setAnalyzer({green: 30})).toBe("boolean");
    });

    test("SetAnalyzer will return true if given an empty object", () => {
        const result = setAnalyzer({});
        expect(result).toEqual(true);
    });
})