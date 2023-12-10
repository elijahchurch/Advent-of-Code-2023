import { determineCardWorth, scratchCardEvaluator, determineMatches, determineNumberOfScratchCards } from "../AdventFunctions/ScratchCard"
import { scratchCards } from "../data/ScratchCardsData";

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

    test("determineCardWorth will return 1 if there is exactly 1 match", () => {
        const winningNumbers = [5,7,8];
        const values = [3,78,5];
        const card = {
            win: winningNumbers,
            values: values,
        }
        const result = determineCardWorth(card);
        expect(result).toEqual(1);
    });

    test("determineCardWorth will return correct # with multiple matches", () => {
        const winningNumbers = [5,7,8, 9, 11];
        const values = [3,78,5, 11, 9, 7];
        const card = {
            win: winningNumbers,
            values: values,
        }
        const result = determineCardWorth(card);
        expect(result).toEqual(8);
    });

    test("scratchCardEvaluator will return correct # with multiple cards", () => {
        const winningNumbers1 = [5,7,8, 9, 11];
        const values1 = [3,78,5, 11, 9, 7];
        const card1 = {
            win: winningNumbers1,
            values: values1,
        };
        const winningNumbers2 = [4,3,2];
        const values2 = [34, 3, 2];
        const card2 = {
            win: winningNumbers2,
            values: values2,
        };
        const cardGroup = [card1, card2];
        const result = scratchCardEvaluator(cardGroup);
        expect(result).toEqual(10);
    });

    // test("Result!", () => {
    //     const result = scratchCardEvaluator(scratchCards);
    //     expect(result).toEqual(1000);
    // })

    test("determineMatches will return correct # of matches", () => {
        const winningNumbers = [5,7,8, 9, 11];
        const values = [3,78,5, 11, 9, 7];
        const card = {
            win: winningNumbers,
            values: values,
        }
        const result = determineMatches(card);
        expect(result).toEqual(4);
    });

    test("Result!", () => {
        const result = determineNumberOfScratchCards(scratchCards);
        expect(result).toEqual(100);
    })
})