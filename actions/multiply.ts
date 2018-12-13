export const multiply = (a: string, b: string): string => {
    if (a === '0' || b === '0' || a === '' || b === '') {
        return '0';
    } else if (a === '1') {
        return b;
    } else if (b === '1') {
        return a;
    }

    const aArr: string[] = numToReversedArr(a);
    const bArr: string[] = numToReversedArr(b);
    const stack: number[] = multiplyArrays(aArr, bArr);

    return shiftStack(stack).reverse().join('');
}

export const numToReversedArr = (number: string): string[] => numToArray(number).reverse();

export const numToArray = (number: string): string[] => number.split('');

const multiplyArrays = (aArr: string[], bArr: string[]): number[] => {
    const stack: number[] = [];

    aArr.forEach((aNumber: string, i: number) => {
        bArr.forEach((bNumber: string, j: number) => {
            const m: number = +aNumber * +bNumber;
            stack[i + j] = stack[i + j]
                ? stack[i + j] + m
                : m;
        });
    });

    return stack;
}

const shiftStack = (stack: number[]): number[] => {
    const resultStack: number[] = [...stack];

    for (let i: number = 0; i < resultStack.length; i++) {
        const units: number = resultStack[i] % 10;
        const tens: number = Math.floor(resultStack[i] / 10);

        resultStack[i] = units;
        if (resultStack[i + 1]) {
            resultStack[i + 1] += tens;
        } else if (tens !== 0) {
            resultStack[i + 1] = tens;
        }
    }

    return resultStack;
}