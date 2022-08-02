//varibelas
const obj :{name:string,age :number} ={name:'pulasthi',age:25}

//varibelas
const obj2  ={name:'pulasthi',age:25}

// object with function pramiter
function printPerson(preson: { frist: string; last: string }): void {
  console.log(preson);
}

printPerson({1,'narada'})

printPerson({'pulasthi'})

const fullName :{frist:string,last :string} ={frist:'pulasthi',last:'narada'}

printPerson(fullName)

// return object  with type
function functionReturnObject  ():{name:string,age :number}{

    return obj
   }

// return object  without write function type
function functionReturnObject2  (){

 return obj
}

// return object
const functionReturnObject3 = ():{name:string,age :number}=> obj

//Excess Properties

const obj3 :{name:string,age :number} ={name:'pulasthi',age:25}

function printPerson2(preson: { name: string; age: number }): void {
    console.log(preson);
  }

  printPerson2({name:'asha', age:35})

  printPerson2({name:'asha', age:35,address:'colombo'})

const obj4 = { name: 'asha', age: 35, address: 'colombo' };

printPerson2(obj4)

function printPerson3(preson: { name: string; age: number }): {
  name: string;
  age: number;
} {
  return preson;
}

printPerson3(obj4);

function printPerson4(preson: { name: string; age: number }): {
    name: string;
    age: number;
  } {
    return preson;
  }

  printPerson4({ name: 'asha', age: 35, address: 'colombo' })




  // Type Aliases object
  type P ={
    name: string;
    age: number;

  }

//Type Aliases using in function
  function printPerson5(preson: P): P {
    return preson;
  }


  // type using in veriable
  type Name  = string
  let names : Name ='pulasthi narada'


  //nested object

  const song ={
    title :'baby i got you',artist:'N/a',relestedYear:1993,
  credit:{writer:'N/a',producer:'N/a'}
}


  //without type
  const printSong = (song:{title:string,artist:string,relestedYear:number,credit:{writer:string,producer:string}}): void=>{

    console.log(song)
  }

  printSong(song)

  type Song ={title:string,artist:string,relestedYear:number,credit:{writer:string,producer:string}}

  //with type
  const printSong2 = (song:Song): void=>{

    console.log(song)
  }

  printSong2(song)


  //Optional Properties

  type Point ={x:number,y:number,c?:number}

const point :Point ={x:123,y:456}

const avg :{num1: number,num2:number, num3?:number} ={num1:23,num2:45}



// readonly Modifier

type User ={readonly id:number,userName:string}

const user:User ={  id:00001,userName:'pula'}

console.log(user.id)

user.id = 00002

const user2:User ={  id:00002,userName:'narada'}

console.log(user2.id)

user2.id = 00002

//Intersection Types

type Cat ={name:string,age:number}

type Dog ={bried:string}

type CatDog = Cat&Dog

const catDog :CatDog ={name:'ff',age:4,bried:'rrr'}

type CatDog2 = Cat&Dog&{country:string}

const catDog2 :CatDog2 ={name:'ff',age:4,bried:'rrr',country:'united status'}