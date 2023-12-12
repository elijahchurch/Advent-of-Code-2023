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