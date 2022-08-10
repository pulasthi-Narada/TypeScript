let number: number | string;
number = '12';
number = 12;

type Point = { x: number; y: number };

type Geo = { lang: number; long: number };

let locations: Point | Geo;

locations = { x: 1, y: 2 };

locations = { lang: 2, long: 2 };

//function

const calulateTax = (price: number | string, tax: number): number => {
  if (typeof price === 'string') {
    price = parseFloat(price) * tax;
    return price;
  }
  return price * tax;
};

calulateTax(123, 45);

calulateTax('123', 45);

//array

const arry: (number | string)[] = [1, 'ddddd', 2];

const loc: (Point | Geo)[] = [
  { x: 1, y: 2 },
  { lang: 2, long: 2 },
];

// Literal Types

let zero: 0;

zero = 0;

let names: 'pulasthi';
names = 'pulasthi';

const yourName = (name: 'pulasthi' | 'narada' | 'asha'): string => name;

yourName('pulasthi');

yourName('dddd');

let n: any;
n = 'xx';
yourName(n);
