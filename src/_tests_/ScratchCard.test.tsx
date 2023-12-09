import { determineCardWorth } from "../AdventFunctions/ScratchCard"

describe("ScratchCard and helper functions", () => {

    test("determineCardWorth will return 0 if there are no matches", () => {
        const winningNumbers = [5,7,8];
        const values = [3,78,31];
        const card = {
            win: winningNumbers,
            values: values,
        }
        const result = determineCardWorth(card);
        expect(result).toEqual(0);
    });

    test("determineCardWorth will return 1 if there is exactly 1 matche", () => {
        const winningNumbers = [5,7,8];
        const values = [3,78,5];
        const card = {
            win: winningNumbers,
            values: values,
        }
        const result = determineCardWorth(card);
        expect(result).toEqual(1);
    });


})