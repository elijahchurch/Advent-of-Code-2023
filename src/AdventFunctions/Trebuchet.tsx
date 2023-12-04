export const findFirstNumber = (data: string) => {
    const dataArray : string[] = data.split("");
    const result = dataArray.find((e) => !isNaN(parseInt(e)));
    return (result);
    
} 

export const findLastNumber = (data: string) => {
    const dataArray : string[] = data.split("");
    const result = dataArray.findLast((e) => !isNaN(parseInt(e)));
    return result;
}

export const pullCalibrationValues = (data: string[]) : number[] => {
    const result = data.map((string) => {
        const firstNum = findFirstNumber(string);
        const lastNum = findLastNumber(string);
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

