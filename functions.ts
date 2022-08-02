// beter if  write tpye of function. it is clean and easy to look and what is function type is
const name2 = (name: string): number => {
  return parseFloat(name);
};

// no need to write  function type
const numPlus2 = (n: number) => n + n;

// defualt parameter value with type
const numPlus3 = (n: number = 1) => {
  return n + n;
};

// defualt parameter value without type
const numPlus3 = (n = 1) => {
  return n + n;
};

numPlus(1);
numPlus('sss');

numPlus3(1);

const na: number = name2('1');

// function have tow types string and number
const numberAndString = (n: string) => {
  return n === '1' ? parseFloat(n) : n;
};

const ns: boolean = numberAndString('1');

const colors = ['red', 'green', 'yellow'];

// Anonymous Function Contextual Typing. typescrpit smart fegure it out what the type is look in that provied arry.
//this is best way for Anonymous Function.
colors.map((color) => color.toUpperCase());

// Anonymous Function Contextual Typing. with type
colors.map((color: string) => color.toUpperCase());

//void best way. it is clearn
const hello = (h: string): void => {
  console.log(h);
};

//void without void fuction type
const hello2 = (h: string) => {
  console.log(h);
};

//void with error
const hello3 = (h: string): void => {
  console.log(h);
  return h;
};

//never
function makeError(str: string): never {
  throw new Error(str);
}

//never with error
function makeError(str: string): never {
  return '';
  throw new Error(str);
}

//never
function continueRun(str: string): never {
  while (true) {
    console.log(str);
  }
}

//never with error
function continueRun2(str: string): never {
  while (true) {
    console.log(str);
  }

  return 'f';
}
