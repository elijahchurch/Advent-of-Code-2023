const stringNumbers  = [ "one", "two","three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  
const regexOfPossibleValues = new RegExp(stringNumbers.join("|"), "gi");
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

export const findFirstNumber = (data: string[]) => {
    const result = data.find((e) => !isNaN(parseInt(e)));
    return (result);
    
} 

export const findLastNumber = (data: string[]) => {
    const result = data.findLast((e) => !isNaN(parseInt(e)));
    return result;
}

const pullValue = (key: string) => {
    if(key.length > 1) {
        return keyValues[key]
    }
    else{
        return key;
    }
}

export const pullCalibrationValues = (data: string[]) : number[] => {
    const result = data.map((string) => {
        const matchArray = string.match(regexOfPossibleValues);
        const firstFind = matchArray[0];
        const firstNum = pullValue(firstFind);
        const lastFind = matchArray[matchArray.length - 1];
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

