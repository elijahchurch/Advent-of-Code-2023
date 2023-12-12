import { winningRecordOptions } from "../AdventFunctions/BoatRace";
import { testRace, races } from "../data/BoatRaceData";

describe("BoatRace and helper functions", () => {
    
    test("WinningRecordOptions will return the winning # of soultions for a race", () => {
        const result = winningRecordOptions(testRace);
        expect(result).toEqual(4);
    })
})