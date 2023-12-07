import { setAnalyzer, gameAnalyzer, cubeProbabilityCounter, gamePowerCounter } from "../AdventFunctions/CubeProbability"
import { games } from "../data/cubeProbability";

describe ('CubeProbability', () => {
    test('Sequence Analyzer returns a boolean', () => {
        expect(typeof setAnalyzer({green: 30})).toBe("boolean");
    });

    test("SetAnalyzer will return true if given an empty object", () => {
        const result = setAnalyzer({});
        expect(result).toEqual(true);
    });

    test("setAnalyzer will return false if red prop is greater than 12", () => {
        const result = setAnalyzer({red: 13});
        expect(result).toEqual(false);
    });

    test("setAnaylzer should return true if red prop is <= 12", () => {
        const result = setAnalyzer({red: 12});
        expect(result).toEqual(true);
    });

    test("setAnalyzer will return false if green prop is greater than 13", () => {
        const result = setAnalyzer({green: 30});
        expect(result).toEqual(false);
    });

    test("setAnalyzer will return false if green prop is greater than 13", () => {
        const result = setAnalyzer({blue: 15});
        expect(result).toEqual(false);
    });

    test('game Analyzer returns a boolean', () => {
        expect(typeof gameAnalyzer([{green: 30}])).toBe("boolean");
    });

    test("gameAnalyzer will return false if any of the gameSets doesn't meet the requirements", () => {
        const result = gameAnalyzer([{blue: 15}]);
        expect(result).toEqual(false);
    });

    // test("Result!?", () => {
    //     const result = cubeProbabilityCounter(games);
    //     expect(result).toEqual(99);
    // })

    test("Result for part 2!", () => {
        const result = gamePowerCounter(games);
        expect(result).toEqual(99);
    })
})