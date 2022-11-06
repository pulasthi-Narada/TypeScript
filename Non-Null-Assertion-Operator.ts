
const h1 = document.getElementById('h');

// ? check if h1 not null
h1?.addEventListener('click', () => {
  console.log('hello world hello frisd mabe 😍');
});

h1?.innerText = 'hello friend 😍';

//  ! btn never  be null
const btn = document.querySelector('button')!;

let clickTime: number = 0;
let emoje: string = '😍';
btn.addEventListener('click', () => {
  clickTime++;

  if (clickTime !== 1) emoje += '😍';

  console.log(emoje);
});
