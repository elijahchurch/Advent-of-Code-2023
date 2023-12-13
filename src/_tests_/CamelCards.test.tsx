import { determineHandType } from "../AdventFunctions/CamelCards";

describe("CamelCards and helper functions", () => {

    test("determineCardWorth can determine fiveOfAKind", () => {
        const hand = ["a", "a", "a", "a", "a"];
        const result = determineHandType(hand);
        expect(result).toEqual("fiveOfAKind");
    })
})