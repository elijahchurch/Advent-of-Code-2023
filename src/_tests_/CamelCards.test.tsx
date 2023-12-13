import { determineHandType, determineStrongerHand } from "../AdventFunctions/CamelCards";

describe("CamelCards and helper functions", () => {

    test("determineHandType can determine fiveOfAKind", () => {
        const hand = ["a", "a", "a", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("fiveOfAKind");
    })

    test("determineHandType can determine fourOfAKind", () => {
        const hand = ["a", "1", "a", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("fourOfAKind");
    })

    test("determineHandType can determine fullHouse", () => {
        const hand = ["1", "a", "1", "a", "1"];
        const result = determineHandType(hand);
        expect(result).toEqual("fullHouse");
    })

    test("determineHandType can determine threeofAKind", () => {
        const hand = ["1", "a", "x", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("threeOfAKind");
    })

    test("determineHandType can determine twoPair", () => {
        const hand = ["1", "a", "x", "a", "x"];
        const result = determineHandType(hand);
        expect(result).toEqual("twoPair");
    })

    test("determineHandType can determine onePair", () => {
        const hand = ["1", "d", "x", "c", "x"];
        const result = determineHandType(hand);
        expect(result).toEqual("onePair");
    })

    test("determineHandType can determine highCard", () => {
        const hand = ["1", "d", "x", "c", "V"];
        const result = determineHandType(hand);
        expect(result).toEqual("highCard");
    })

    test("determineStrongerHand returns 1 if the first hand's first card is higher", () => {
        const hand1 = ["A", "2", "T", "3", "7"];
        const hand2 = ["J", "3", "4", "5", "6"];
        const result = determineStrongerHand(0, hand1, hand2);
        expect(result).toEqual(1)
    })
})