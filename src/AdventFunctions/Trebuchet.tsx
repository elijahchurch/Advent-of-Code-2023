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
        const stringArray = string.split("");
        const firstNum = findFirstNumber(stringArray);
        const lastNum = findLastNumber(stringArray);
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

