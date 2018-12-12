var k = '960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719';
var a = '123456';
var b = '6534';
function isOdd(number) {
    var strNumber = typeof number === 'number' ? number.toString() : number;
    return +strNumber[strNumber.length - 1] % 2 === 1;
}
function multiply(a, b) {
    var aArr = a.toString().split('').reverse();
    var bArr = b.toString().split('').reverse();
    var stack = [];
    aArr.forEach(function (aNumber, i) {
        bArr.forEach(function (bNumber, j) {
            var m = +aNumber * +bNumber;
            stack[i + j] = stack[i + j]
                ? stack[i + j] + m
                : m;
        });
    });
    for (var i = 0; i < stack.length; i++) {
        var units = stack[i] % 10;
        var tens = Math.floor(stack[i] / 10);
        stack[i] = units;
        if (stack[i + 1]) {
            stack[i + 1] += tens;
        }
        else if (tens != 0) {
            stack[i + 1] = tens;
        }
    }
    return stack.reverse().join('');
}
console.log(multiply(k, k));
/*
function pow(a: string, n: string) {
  let result: string = '1';
  while (n !== '0') {
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
*/
/*
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
*/
