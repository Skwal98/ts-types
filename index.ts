console.log('test');

interface Lengthwise {
  length: number;
}

interface Sizehwise {
  size: number;
}

function logging<T extends Lengthwise & Sizehwise>(a: T): T {
  return a;
}

///////////////////////

interface Car {
  model: number;
  year: number;
}

type CarKeyOff = keyof Car;

type indexerType = { [x: number]: Car };

function test(par: indexerType) {
  console.log(par['audi']);
}

var par: indexerType;
par = {};
var audi = { model: 21, year: 2010 } as Car;
par['audi'] = audi;
test(par);

console.log();

/////////////////////////////////////

