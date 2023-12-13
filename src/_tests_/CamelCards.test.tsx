import { determineHandType } from "../AdventFunctions/CamelCards";

describe("CamelCards and helper functions", () => {

    test("determineCardWorth can determine fiveOfAKind", () => {
        const hand = ["a", "a", "a", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("fiveOfAKind");
    })

    test("determineCardWorth can determine fourOfAKind", () => {
        const hand = ["a", "1", "a", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("fourOfAKind");
    })

    test("determineCardWorth can determine fullHouse", () => {
        const hand = ["1", "a", "1", "a", "1"];
        const result = determineHandType(hand);
        expect(result).toEqual("fullHouse");
    })
})