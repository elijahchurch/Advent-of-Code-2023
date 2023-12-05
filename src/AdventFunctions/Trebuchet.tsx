const stringNumbers  = ["one", "two","three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  
const regexOfPossibleValues = new RegExp(stringNumbers.join("|"), "g");
const stringNumbers2  = ["ne", "wo","hree", "our", "ive", "ix", "even", "ight", "ine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  
const reversePossibleValues = new RegExp(`(${stringNumbers.join("|")})(?!(${stringNumbers2.join("|")}))`, "g");
const keyValues : { [key : string] : string}= {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}

// export const findFirstNumber = (data: string[]) => {
//     const result = data.find((e) => !isNaN(parseInt(e)));
//     return (result);
    
// } 

// export const findLastNumber = (data: string[]) => {
//     const result = data.findLast((e) => !isNaN(parseInt(e)));
//     return result;
// }

const pullValue = (key: string) => {
    return keyValues[key] ?? key
}

export const pullCalibrationValues = (data: string[]) : number[] => {
    const result = data.map((string) => {
        const matchArray = string.match(regexOfPossibleValues);
        const firstFind = matchArray[0];
        const firstNum = pullValue(firstFind);
        const matchArray2 = string.match(reversePossibleValues)
        console.log(string, matchArray2);
        const lastFind = matchArray2[(matchArray2.length - 1)];
        const lastNum = pullValue(lastFind);
        return parseInt(firstNum + lastNum)
    })
    return result;
}

export const calibrator = (data: string[]) : number => {
    const calibrationValues: number[] = pullCalibrationValues(data);
    let sum = 0;
    calibrationValues.forEach((e) => {
        sum += e;
    })
    return sum;
}

