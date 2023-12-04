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
        const lastNumb = findLastNumber(string);
        return 
    })
    return result;
}

export const calibrator = (data: string[]) : number => {
    const answer: number = data.length;
    return answer;
}

