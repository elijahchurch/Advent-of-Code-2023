import { wastelandMap } from "../data/HauntedWastelandData";

const map = wastelandMap;

export const findExit = (coordinates: number[]) => {
    let steps = 0;
    let location : string = "AAA";
    let totalSteps = 0;
    // const move = (data: number[]) => {
    //     for( let i=0; i<data.length; i++) {
    //         steps +=1;
    //         let position = map[location];
    //         let direction = data[i];
    //         location = position[direction];
    //         if(location === "ZZZ") {
    //             totalSteps = steps;
    //             break;
    //         }
    //     }
        // data.every((coord, index) => {
        //     steps += 1;
        //     let position = map[location];
        //     location = position[coord];
        //     console.log(location);
        //     if(location === "ZZZ") {
        //         totalSteps += steps;
        //         return false;
        //     } else if(index -1 === coordinates.length) {
        //         return false;
        //     } else {
        //         return true;
        //     }
        // });
    //     if(totalSteps > 0) {
    //         return;
    //     } else {
    //         return move(data);
    //     }
    // };
    const move2 = (data: number[]) => {
        let currentLocation = "AAA";
        while(currentLocation !== "ZZZ") {
            let position = map[currentLocation];
            let direction = data[steps%data.length];
            currentLocation = position[direction];
            steps +=1;
        }
    }
    move2(coordinates);
    console.log([location, totalSteps, steps])
    return steps;
}