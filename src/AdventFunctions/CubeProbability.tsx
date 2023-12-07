import { IGameSet, IGames } from "../Interfaces"

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
    sets.forEach((set) => {
        const setResult = setAnalyzer(set);
        if(setResult === false) {
            result = false;
        }
    })
    return result; 
}

export const cubeProbabilityCounter = (games: IGames) : number => {
    let result = 0;
    const idKeys : string[] = Object.keys(games);
    idKeys.forEach((id) => {
        const gameCheck = gameAnalyzer(games[id]);
        if(gameCheck === true) {
            result += parseInt(id);
        }
    })
    return result;
}