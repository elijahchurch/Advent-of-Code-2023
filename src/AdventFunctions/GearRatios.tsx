// This needs to get pushed to github?

export const charaIndexer = (data: string) : number[] => {
    const charaArray = data.split("");
    const result = charaArray.map((e, index) => {
        const search = e.search(/[^a-zA-Z\d.]/);
        if(search !== -1) {
            return index;
        } 
    });
    const filteredResult = result.filter((e) => e !== undefined);
    return filteredResult;
}

export const numberExtractor = (data: string) => {
    const stringArray = data.match(/\d+/g);
    // const numArray = stringArray?.map((e) => parseInt(e));
    return stringArray;
}

export const numIndexer = (data : string) : number[] => {
    const charaArray = data.split("");
    const result = charaArray.map((e, index) => {
        const search = e.search(/\d/);
        if(search !== -1) {
            return index;
        } 
    });
    const filteredResult = result.filter((e) => e !== undefined);
    return filteredResult;
}

export const partNumberInfo = (data: string) => {
    const numberArray = numberExtractor(data);
    const indexArray = numIndexer(data);
    const resultArray = numberArray?.map((e) => {
        const dataArray = [];
        dataArray.push(e);
        const indexes = indexArray.splice(0, e.length);
        dataArray.push(indexes);
        return dataArray;
    })
    return resultArray;
}

export const partNumberchecker = (data: string[]) => {
    const charaInfo = data.map((e) => charaIndexer(e));
    const partInfo = data.map((e) => partNumberInfo(e));
    let arrayOfViableNumbers =[]
    partInfo.forEach((partInfoArray, index) => {
        // console.log(charaInfo[(index + 1)]);
        if(index === 0) {
            partInfoArray?.forEach((partInfo) => {
                const partIndexes : number[] = partInfo[1];
                let resultCheck;
                partIndexes.forEach((partNumIndex) => {
                    if(charaInfo[index].includes(partNumIndex + 1) || charaInfo[index].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } else if (charaInfo[index + 1].includes(partNumIndex) || charaInfo[index + 1].includes(partNumIndex + 1) || charaInfo[index +1].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } 
                })
                if(resultCheck === true) {
                    arrayOfViableNumbers.push(partInfo[0]);
                } 
            });
        } else if(index === (partInfo.length -1)) {
            partInfoArray?.forEach((partInfo) => {
                const partIndexes : number[] = partInfo[1];
                let resultCheck;
                partIndexes.forEach((partNumIndex) => {
                    if(charaInfo[index].includes(partNumIndex + 1) || charaInfo[index].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } else if (charaInfo[index - 1].includes(partNumIndex) || charaInfo[index - 1].includes(partNumIndex + 1) || charaInfo[index - 1].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } 
                })
                if(resultCheck === true) {
                    arrayOfViableNumbers.push(partInfo[0]);
                } 
            });
        } else {
            partInfoArray?.forEach((partInfo) => {
                const partIndexes : number[] = partInfo[1];
                let resultCheck;
                partIndexes.forEach((partNumIndex) => {
                    if(charaInfo[index].includes(partNumIndex + 1) || charaInfo[index].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } else if (charaInfo[index - 1].includes(partNumIndex) || charaInfo[index - 1].includes(partNumIndex + 1) || charaInfo[index - 1].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } else if (charaInfo[index + 1].includes(partNumIndex) || charaInfo[index + 1].includes(partNumIndex + 1) || charaInfo[index +1].includes(partNumIndex - 1)) {
                        resultCheck = true;
                    } 
                })
                if(resultCheck === true) {
                    arrayOfViableNumbers.push(partInfo[0]);
                } 
            });
        }
    })
    return arrayOfViableNumbers.map(e => parseInt(e));
}

export const gearRatioCalculator = (data : string[]) => {
    const numArray = partNumberchecker(data);
    let result = 0;
    numArray.forEach((number) => {
        result += number;
    })
    return result;
}

