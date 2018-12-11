const k = '960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719';
const a = '1234567';
const b = '6534';

const castNumberAsArray = (n: string): string[] => n.split('');
const multiply = (a: number, b: number): number => a * b;

function bigMultiply(a: string, b: string) {
  const arrA = castNumberAsArray(a);
  const arrB = castNumberAsArray(b);
  const multiplierMatrix = arrMultiply(arrA, arrB);

  console.log(multiplierMatrix);


}

function arrMultiply(arrA: string[], arrB: string[]): number[][] {
  const arrC: number[][] = [];
  arrB.forEach((bNumber: string, index: number) => {
    arrA.forEach((aNumber: string) => {
      if (typeof arrC[index] === 'undefined') {
        arrC[index] = [];
        for(let i=0; i<index; i++) {
          arrC[index].push(0);
        }
      }
      arrC[index].push(multiply(+bNumber, +aNumber));
    })
  })
  return addMatrixZeros(arrC.reverse());
}

function addMatrixZeros(matrix: number[][]): number[][] {
  const maxRowLength = matrix[0].length;
  return matrix.map((row: number[]) => {
    for(let i=row.length; i<maxRowLength; i++) {
      row[i] = 0;
    }
    return row;
  });
}

function slamMatrix(matrix: number[][]) {
  
}


bigMultiply(a, b);

/*
const isOdd = (n: number): boolean => n % 2 === 1;



const devideEven = (n: number): number => n / 2;

const square = (n: number): number => multiply(n, n);

const squareOrMultiply = (isOdd: boolean, n: number, result: number) => isOdd ? multiply(result, n) : square(result);

const powAsSpread = (n: number, exp: number) => exp === 0 ? 1 : spread(exp).reduceRight((result, item) => squareOrMultiply(item, n, result), n);

const calc = (a: number, n: number, result: number) => {
  if (isOdd(n)) {
    return {
      result: multiply(a, result),
      n: n - 1
    };
  } else {
    return {
      a: multiply(a, a),
      n: devideEven(n)
    }
  }
};

function pow(a: number, n: number) {
  let result: number = 1;
  while (n !== 0) {
    if (isOdd(n)) {
      result = multiply(a, result);
      n = n - 1;
    } else {
      a = multiply(a, a);
      n = devideEven(n);
    }
  }
  return result;
}

function spread(n: number, result: boolean[] = []) {
  if (n === 1) {
    console.log(result.length);
    return result;
  } else if (isOdd(n)) {
    result.push(true);
    return spread(n - 1, result);
  } else {
    result.push(false);
    return spread(devideEven(n), result);
  }
}

function exp(a, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return a;
  } else if (isOdd(n)) {
    return a * exp(multiply(a, a), devideEven(n - 1))
  } else {
    return exp(multiply(a, a), devideEven(n));
  }
}

powAsSpread(2, 1234567891234560000);*/