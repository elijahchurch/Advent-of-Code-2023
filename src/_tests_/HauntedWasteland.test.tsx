import { coordinateInput } from "../data/HauntedWastelandData"
import { findExit } from "../AdventFunctions/HauntedWasteland"

describe("Haunted WasteLand and helper functions", () => {

    test("Result!?", () => {
        const result = findExit(coordinateInput);
        expect(result).toEqual(1000);
    });
})