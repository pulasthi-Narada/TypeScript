const namesList: string[] = ['pulasthi', 'asha'];

namesList.push('shan');

namesList.push(1);

const boolList: boolean[] = [true, false];

//any
const anyList = [1, 2, 3, 'r'];
const anyList2: any[] = [1, 2, 3, 'r'];

//another way to write array
const bolList: Array<boolean> = [true, false];
const numList: Array<number> = [1, 2, 3];


type Student = { name: string; age: number };

const studentList: Student[] = [];

studentList.push({ name: 'pulasthi', age: 25 });

studentList.push({ name: 'pulasthi' });



// Multidimensional Arrays
const tikkakto: string[][] = [
  ['x', '0'],
  ['x', '0'],
  ['x', '0'],
  ['x', '0'],
];
