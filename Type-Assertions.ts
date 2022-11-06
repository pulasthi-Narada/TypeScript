let mystery: unknown = 'pulasthi';

console.log(mystery.length);

// consider  as a string
console.log((mystery as string).length);

//
let mystery2: unknown = 2;

console.log(mystery2.length);

// consider  as a string
console.log((mystery2 as string).length);

//
const input = document.getElementById('#name-input');

console.log(input.value);

// input as HTMLInputElement
const input2 = document.getElementById('#name-input') as HTMLInputElement;

console.log(input2.value);

const title = document.querySelector('#title') as HTMLHeadingElement;

console.log(title.innerHTML);

// another singtag
const img = document.querySelector('#img');

console.log((<HTMLImageElement>img).src);
