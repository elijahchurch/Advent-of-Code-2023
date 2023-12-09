import { readFileIntoStringArray } from "../readFile";
import { charaIndexer, numberExtractor, numIndexer, partNumberInfo, partNumberchecker, gearRatioCalculator} from "../AdventFunctions/GearRatios";

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
    });

    test("charaIndexer used in a map should turn a string array into an array of number arrays", () => {
        const testData = ["..65$", "$%ab"];
        const result = testData.map((e) => charaIndexer(e));
        expect(result).toEqual([[4], [0,1]])
    });

    test("NumberExtractor should pull all full numbers from a string", () => {
        const testLine = "56..87&.4a..78";
        const result = numberExtractor(testLine);
        expect(result).toEqual(["56","87","4","78"]);
    })

    test("numIndexer should return the index positions of all the numbers in a string", () => {
        const testLine = "56..87&";
        const result = numIndexer(testLine);
        expect(result).toEqual([0,1,4,5]);
    })

    test("partNumberInfo should return an array with number and numberArray", () => {
        const testLine = "56..87&";
        const result = partNumberInfo(testLine);
        expect(result).toEqual([["56", [0,1]], ["87", [4,5]]]);
    })

    test("partNumberChecker should return a result", () => {
        const testLine = "56..87&";
        const testLine2 = "...&.9";
        const testLine3 = "%..1..";
        const testData = [testLine, testLine2, testLine3];
        const result = partNumberchecker(testData);
        expect(result).toEqual([87, 9, 1]);
    });

    test("gearRatioCalculator should add up all viable numbers", () => {
        const testLine = "56..87&";
        const testLine2 = "...&.9";
        const testLine3 = "%..1..";
        const testData = [testLine, testLine2, testLine3];
        const result = gearRatioCalculator(testData);
        expect(result).toEqual(97);
    });

    // test("RESULT!?", async () => {
    //     const data = await readFileIntoStringArray("src/data/GearRatiosData");
    //     const result = gearRatioCalculator(data);
    //     expect(result).toEqual(1000);

    // })
})