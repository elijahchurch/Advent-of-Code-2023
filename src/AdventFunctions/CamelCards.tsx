export const handStrength = {
    highCard: 1,
    onePair: 2,
    twoPair: 3,
    threeOfAKind: 4,
    fullHouse: 5,
    fourOfAKind: 6,
    fiveOfAKind: 7,
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
    }
    return "highCard";
}