import { IScratchCard } from "../Interfaces"

export const determineCardWorth = (card: IScratchCard) : number => {
    let cardWorth = 0;
    card.values.forEach((value) => {
        if(card.win.includes(value)) {
            if (cardWorth === 0) {
                cardWorth = 1;
            }
        }
    })
    return cardWorth;
}