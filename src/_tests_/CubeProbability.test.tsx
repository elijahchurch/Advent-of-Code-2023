import { setAnalyzer } from "../AdventFunctions/CubeProbability"

describe ('CubeProbability', () => {
    test('Sequence Analyzer returns a boolean', () => {
        const result = setAnalyzer({green: 40});
        expect(result).toBe("boolean");
    })
})