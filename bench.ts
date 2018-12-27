import * as Benchmark from 'benchmark';
import {isSecondBigger, subtractByModule} from "./actions/subtract";
import {findBiggestValueString, subtract} from "./actions/divide";

const a = '44324234234234365498678562423423423';
const k = '960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719';


const log = (text) => {
  console.log(text);
};

const my = () => async () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push({k, a});
  }
  await Promise.all(arr.map(({k: k1, a: a1}) => Promise.resolve(subtractByModule(k1, a1))));
};

const his = () => async () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push({k, a});
  }
  await Promise.all(arr.map(({k: k1, a: a1}) => Promise.resolve(subtract(k1, a1))));
};

const suite = new Benchmark.Suite;

suite
  .add('my', my)
  .add('his', his)
  .on('cycle', function (event) {
    log(String(event.target));
  })
  .on('complete', function () {
    log(this);
    log('Fastest is ' + this.filter('fastest').map('name'));
    log('---------');
  })
  .run({'async': true});

log('Please wait...');

