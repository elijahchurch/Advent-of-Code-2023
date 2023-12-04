const stringNumbers  = [ "one", "two","three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  
const regexOfPossibleValues = new RegExp(stringNumbers.join("|"), "gi");

export const findFirstNumber = (data: string[]) => {
    const result = data.find((e) => !isNaN(parseInt(e)));
    return (result);
    
} 

export const findLastNumber = (data: string[]) => {
    const result = data.findLast((e) => !isNaN(parseInt(e)));
    return result;
}

export const pullCalibrationValues = (data: string[]) : number[] => {
    const result = data.map((string) => {
        const matchArray = string.match(regexOfPossibleValues);
        const firstNum = matchArray[0];
        const lastNum = matchArray[matchArray.length - 1];
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

