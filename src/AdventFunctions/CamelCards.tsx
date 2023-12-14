import {ICamelCards} from "../data/CamelCardsData"

export const typeStrength = {
    highCard: 1,
    onePair: 2,
    twoPair: 3,
    threeOfAKind: 4,
    fullHouse: 5,
    fourOfAKind: 6,
    fiveOfAKind: 7,
}

export const handStrength = {
    "J": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "T": 10,
    "Q": 11,
    "K": 12,
    "A": 13,
}

export const determineHandType = (hand: string[]) : string => {
    const sorted = [...hand].sort();
    if(!sorted.includes("J")) {
        if(sorted[0] === sorted[1] && sorted[0] === sorted[2] && sorted[0] === sorted[3] && sorted[0] === sorted[4]) {
            return "fiveOfAKind";
        } else if(
            (sorted[0] === sorted[1] && sorted[0] === sorted[2] && sorted[0] === sorted[3]) || 
            (sorted[1] === sorted[2] && sorted[1] === sorted[3] && sorted[1] === sorted[4])) {
            return "fourOfAKind";
        } else if(
            (sorted[0] === sorted[1] && sorted[0] === sorted[2] && sorted[3] === sorted[4]) ||
            (sorted[0] === sorted[1] && sorted[2] === sorted[3] && sorted[2] === sorted[4])) {
            return "fullHouse";
        } else if(
            (sorted[0] === sorted[1] && sorted[0] === sorted[2]) ||
            (sorted[1] === sorted[2] && sorted[1] === sorted[3]) ||
            (sorted[2] === sorted[3] && sorted[2] === sorted[4])) {
            return "threeOfAKind";
        } else if(
            (sorted[0] === sorted[1] && sorted[2] === sorted[3]) || 
            (sorted[1] === sorted[2] && sorted[3] === sorted[4]) ||
            (sorted[0] === sorted[1] && sorted[3] === sorted[4])) {
            return "twoPair";
        } else {
            const setOfElements = new Set(sorted);
            if(setOfElements.size !== sorted.length) {
                return "onePair";
            }
            else {
                return "highCard";
            }
        }
    } else {
        const reSort = sorted.sort((a, b) => {
            if(handStrength[a] >= handStrength[b]) {
                return 1;
            } else if(handStrength[a] < handStrength[b]){
                return -1;
            }
        });
        if(reSort[3] === "J") {
            return "fiveOfAKind";
        } else if(reSort[2] === "J") {
            if(reSort[3] === reSort[4]) {
                return "fiveOfAKind";
            } else {
                return "fourOfAKind";
            }
        } else if(reSort[1] === "J") {
            if(reSort[2] === reSort[3] && reSort[2] === reSort[4]) {
                return "fiveOfAKind";
            } else if(reSort[2] === reSort[3] || reSort[3] === reSort[4] || reSort[2] === reSort[4]) {
                return "fourOfAKind";
            } else {
                return "threeOfAKind";
            }
        } else {
            if(reSort[1] === reSort[2] && reSort[1] === reSort[3] && reSort[1] === reSort[4]) {
                return "fiveOfAKind";
            } else if(
                (reSort[1] === reSort[2] && reSort[1] === reSort[3]) ||
                (reSort[2] === reSort[3] && reSort[2] === reSort[4])) {
                return "fourOfAKind";
            } else if(reSort[1] === reSort[2] && reSort[3] === reSort[4]) {
                return "fullHouse";
            } else if(reSort[1] === reSort[2] || reSort[3] === reSort[4] || reSort[2] === reSort[3]) {
                return "threeOfAKind";
            } else {
                return "onePair";
            }
        }
    }
}

export const determineStrongerHand = (index: number, hand1 : string[], hand2: string[]) : number => {
    if(handStrength[(hand1[index])] > handStrength[(hand2[index])]) {
        return 1;
    } else if(handStrength[(hand1[index])] < handStrength[hand2[index]]) {
        return -1;
    } else {
        return determineStrongerHand(index +1, hand1, hand2);
    }
}

export const addTypes = (camelCards: ICamelCards []) : ICamelCards[] => {
    camelCards.forEach((element) => {
        element.type = determineHandType(element.hand);
    });
    return camelCards;
}

export const determineCamelCardsWinnings = (camelCards: ICamelCards []) : number => {
    const typedHands = addTypes(camelCards);
    const sortedHands = typedHands.sort((a, b) => {
        if(typeStrength[a.type] > typeStrength[b.type]) {
            return 1;
        } else if(typeStrength[a.type] < typeStrength[b.type]) {
            return -1;
        } else {
            return determineStrongerHand(0, a.hand, b.hand);
        }
    });
    let result = 0;
    sortedHands.forEach((element, index) => {
        if(element.type === "threeOfAKind") {
            console.log(element);
        }
        const winning = (element.bid)*(index+1);
        result += winning;
    })
    return result;
}