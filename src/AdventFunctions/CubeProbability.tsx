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

export const gamePowerMultiplier = (sets: IGameSet[]) : number => {
    let green = 1;
    let blue = 1;
    let red = 1;
    sets.forEach((set) => {
        if(set["green"]) {
            if(set["green"] > green) {
                green = set["green"];
            }
        } 
        if(set["red"]) {
            if(set["red"] > red) {
                red = set["red"];
            }
        }
        if(set["blue"]) {
            if(set["blue"] > blue) {
                blue = set["blue"];
            }
        }
    })
    const result = green*blue*red;
    console.log(result);
    return result;
}

export const gamePowerCounter = (games: IGames) : number => {
    let result = 0;
    const idKeys : string[] = Object.keys(games);
    idKeys.forEach((id) => {
        result += gamePowerMultiplier(games[id]);
    })
    return result;
}