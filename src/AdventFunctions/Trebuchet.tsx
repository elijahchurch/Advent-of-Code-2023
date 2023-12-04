export const findFirstNumber = (data: string) => {
    const dataArray : string[] = data.split("");
    const result = dataArray.find((e) => !isNaN(parseInt(e)));
    if (result !== undefined) {
        return parseInt(result);
    }
    else {
        return;
    }
} 

export const findLastNumber = (data: string) => {
    const dataArray : string[] = data.split("");
    const result = dataArray.findLast((e) => !isNaN(parseInt(e)));
    if (result !== undefined) {
        return parseInt(result);
    }
    else {
        return;
    }
}

export const pullCalibrationValues = (data: string[]) : number[] => {
    const result = data.map((string) => {
        return string.length;
    })
    return result;
}

export const calibrator = (data: string[]) : number => {
    const answer: number = data.length;
    return answer;
}

