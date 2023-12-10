import { IScratchCard } from "../Interfaces"

export const determineCardWorth = (card: IScratchCard) : number => {
    let cardWorth = 0;
    card.values.forEach((value) => {
        if(card.win.includes(value)) {
            if (cardWorth === 0) {
                cardWorth = 1;
            } else {
                cardWorth = cardWorth * 2;
            }
        }
    })
    return cardWorth;
}

export const scratchCardEvaluator = (cardStack : IScratchCard[]) : number => {
    let result = 0;
    cardStack.forEach((card) => {
        const worth = determineCardWorth(card);
        result += worth;
    })
    return result;
} 

export const determineMatches = (card: IScratchCard) : number => {
    let cardWorth = 0;
    card.values.forEach((value) => {
        if(card.win.includes(value)) {
            cardWorth += 1;
        }
    });
    return cardWorth;
} 

export const determineNumberOfScratchCards = (cardStack : IScratchCard[]) : number => {
    let result = 1;
    const findCards = (index: number) => {
        let matches = determineMatches(cardStack[index]);
        console.log(matches);
        if( matches === 0) {
            return;
        } else {
            for (let i = matches; i = loopLength; i++) {
                result += 1;
                matches = matches -1;
                findCards(index+i);    
            }
        }
    }
    findCards(0);
    return result;
}