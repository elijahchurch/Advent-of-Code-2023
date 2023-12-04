export const findFirstNumber = (data: string) => {
    const dataArray : string[] = data.split("");
    const result = dataArray.find((e) => !isNaN(parseInt(e)));
    return parseInt(result);
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

