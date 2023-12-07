import { IGameSet } from "../Interfaces"

export const setAnalyzer = (gameSet: IGameSet) : boolean => {
    const colors : string[] = Object.keys(gameSet);
    let result = true;
    colors.forEach((color) => {
        if(color === "red" && gameSet[color] > 12) {
            result = false;
        } else if(color === "green" && gameSet[color] > 13) {
            result = false;
        } else if(color === "blue" && gameSet[color] > 14) {
            result = false;
        }
    })
    return result;
}

export const gameAnalyzer = (sets: IGameSet[]) : boolean => {
    let result = true; 
    return result; 
}