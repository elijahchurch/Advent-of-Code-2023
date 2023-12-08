import { readFileIntoStringArray } from "../readFile";

describe("readFileIntoStringArray",  () => {
    
    test("readFileIntoStringArray should take raw data and turn it into a string array", async () => {
        const result = await readFileIntoStringArray("src/data/GearRatiosData");
        const line = ".........398.............551.....................452..................712.996.................646.40...1.....875..958.553...................";
        expect(result).toContainEqual(line);
    });
})