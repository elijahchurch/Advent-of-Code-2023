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

    test("determineCardWorth can determine threeofAKind", () => {
        const hand = ["1", "a", "x", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("threeOfAKind");
    })

    test("determineCardWorth can determine twoPair", () => {
        const hand = ["1", "a", "x", "a", "x"];
        const result = determineHandType(hand);
        expect(result).toEqual("twoPair");
    })

    test("determineCardWorth can determine onePair", () => {
        const hand = ["1", "d", "x", "c", "x"];
        const result = determineHandType(hand);
        expect(result).toEqual("onePair");
    })

    test("determineCardWorth can determine highCard", () => {
        const hand = ["1", "d", "x", "c", "V"];
        const result = determineHandType(hand);
        expect(result).toEqual("highCard");
    })
})