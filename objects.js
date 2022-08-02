//varibelas
var obj = { name: 'pulasthi', age: 25 };
//varibelas
var obj2 = { name: 'pulasthi', age: 25 };
// object with function pramiter
function printPerson(preson) {
    console.log(preson);
}
printPerson({ 1: , 'narada':  });
printPerson({ 'pulasthi':  });
var fullName = { frist: 'pulasthi', last: 'narada' };
printPerson(fullName);
// return object  with type
function functionReturnObject() {
    return obj;
}
// return object  without write function type
function functionReturnObject2() {
    return obj;
}
// return object
var functionReturnObject3 = function () { return obj; };
//Excess Properties
var obj3 = { name: 'pulasthi', age: 25 };
function printPerson2(preson) {
    console.log(preson);
}
printPerson2({ name: 'asha', age: 35 });
printPerson2({ name: 'asha', age: 35, address: 'colombo' });
var obj4 = { name: 'asha', age: 35, address: 'colombo' };
printPerson2(obj4);
function printPerson3(preson) {
    return preson;
}
printPerson3(obj4);
function printPerson4(preson) {
    return preson;
}
printPerson4({ name: 'asha', age: 35, address: 'colombo' });
//Type Aliases using in function
function printPerson5(preson) {
    return preson;
}
var names = 'pulasthi narada';
//nested object
var song = {
    title: 'baby i got you', artist: 'N/a', relestedYear: 1993,
    credit: { writer: 'N/a', producer: 'N/a' }
};
//without type
var printSong = function (song) {
    console.log(song);
};
printSong(song);
//with type
var printSong2 = function (song) {
    console.log(song);
};
printSong2(song);
var point = { x: 123, y: 456 };
var avg = { num1: 23, num2: 45 };
var user = { id: 00001, userName: 'pula' };
console.log(user.id);
user.id = 00002;
var user2 = { id: 00002, userName: 'narada' };
console.log(user2.id);
user2.id = 00002;
var catDog = { name: 'ff', age: 4, bried: 'rrr' };
var catDog2 = { name: 'ff', age: 4, bried: 'rrr', country: 'united status' };
