import { IGameSet } from "../Interfaces"

export const setAnalyzer = (gameSet: IGameSet) : boolean => {
    const colors : string[] = Object.keys(gameSet);
    let result = true;
    colors.forEach((color) => {
        if(color === "red" && gameSet[color] > 12) {
            result = false;
        }
    })
    return result;
}