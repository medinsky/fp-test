import * as Benchmark from 'benchmark';

const log = (text) => {
  console.log(text);
};

const numberParse = () => () => {
  return Number('foo');
};

const parseInteger = () => () => {
  return parseInt('foo');
};

const plusParse = () => () => {
  return +'foo';
};

const suite = new Benchmark.Suite;

suite
  .add('numberParse', numberParse)
  .add('parseInteger', parseInteger)
  .add('plusParse', plusParse)
  .on('cycle', function (event) {
    log(String(event.target));
  })
  .on('complete', function () {
    log('Fastest is ' + this.filter('fastest').map('name'));
    log('---------');
  })
  .run();

log('Please wait...');

