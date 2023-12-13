import { determineHandType, determineStrongerHand, addTypes, determineCamelCardsWinnings} from "../AdventFunctions/CamelCards";

import {camelCards, exampleData} from "../data/camelCardsData";

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
    });

    test("determineStrongerHand returns -1 if the first hand's first card is lower", () => {
        const hand1 = ["8", "2", "T", "3", "7"];
        const hand2 = ["A", "3", "4", "5", "6"];
        const result = determineStrongerHand(0, hand1, hand2);
        expect(result).toEqual(-1)
    })

    // test("determineStrongerHand returns 1 if the first hand's last card is higher", () => {
    //     const hand1 = ["A", "2", "4", "5", "7"];
    //     const hand2 = ["A", "2", "4", "5", "6"];
    //     const result = determineStrongerHand(0, hand1, hand2);
    //     expect(result).toEqual(1)
    // });

    test("addTypes should correctly and the type key and value to each camelCard interface", () => {
        const testSet = [{hand: ["1","1","1","1","1"], bid: 34}];
        const result = addTypes(testSet);
        expect(result[0].type).toEqual("fiveOfAKind");
    })

    test("Result!?", () => {
        const result = determineCamelCardsWinnings(camelCards);
        expect(result).toEqual(1000);
    })
})