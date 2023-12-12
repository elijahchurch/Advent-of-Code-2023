import { raceMarginOfError, winningRecordOptions } from "../AdventFunctions/BoatRace";
import { testRace, races, longRace } from "../data/BoatRaceData";

describe("BoatRace and helper functions", () => {
    
    test("WinningRecordOptions will return the winning # of soultions for a race", () => {
        const result = winningRecordOptions(testRace);
        expect(result).toEqual(4);
    })

    // test("Result!?", () => {
    //     const result = raceMarginOfError(races);
    //     expect(result).toEqual(1000);
    // })

    // test("Result for longRace", () => {
    //     const result = winningRecordOptions(longRace);
    //     expect(result).toEqual(1000);
    // })

})