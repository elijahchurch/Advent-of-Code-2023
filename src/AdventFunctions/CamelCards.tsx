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
    "2": 1,
    "3": 2,
    "4": 3,
    "5": 4,
    "6": 5,
    "7": 6,
    "8": 7,
    "9": 8,
    "T": 9,
    "J": 10,
    "Q": 11,
    "K": 12,
    "A": 13,
}

export const determineHandType = (hand: string[]) : string => {
    const sorted = hand.sort();
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
        (sorted[1] === sorted[2] && sorted[3] === sorted[4])) {
        return "twoPair";
    } else {
        const setOfElements = new Set(sorted);
        console.log(setOfElements);
        if(setOfElements.size !== sorted.length) {
            return "onePair";
        }
        else {
            return "highCard";
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