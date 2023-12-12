import { IRace } from "../data/BoatRaceData";

export const winningRecordOptions = (race: IRace) : number => {
    let winningOptions = 0;
    for (let i = 0; i <= race.time; i++) {
        const boatDistance = i*(race.time - i);
        if(boatDistance > race.distance) {
            winningOptions +=1
        }
    }
    return winningOptions;
}

export const raceMarginOfError = (races: IRace[]) => {
    let errorMargin = 1;
    races.forEach((race) => {
        const winOptions = winningRecordOptions(race);
        errorMargin *= winOptions;
    })
    return errorMargin;
}