import { readFileIntoStringArray } from "../readFile";
import { charaIndexer } from "../AdventFunctions/GearRatios";

describe("Gear Ratios and helper functions",  () => {
    
    test("readFileIntoStringArray should take raw data and turn it into a string array", async () => {
        const result = await readFileIntoStringArray("src/data/GearRatiosData");
        const line = ".........398.............551.....................452..................712.996.................646.40...1.....875..958.553...................";
        expect(result).toContainEqual(line);
    });

    test("charaIndexer should take a string and return array of the index positions of special chara", () => {
        const testLine = "$..abb$";
        const result = charaIndexer(testLine);
        expect(result).toEqual([0, 6]);
    })
})