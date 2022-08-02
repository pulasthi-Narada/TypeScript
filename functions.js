// beter if  write tpye of function. it is clean and easy to look and what is function type is
var name2 = function (name) {
    return parseFloat(name);
};
// no need to write  function type
var numPlus2 = function (n) { return n + n; };
// defualt parameter value with type
var numPlus3 = function (n) {
    if (n === void 0) { n = 1; }
    return n + n;
};
// defualt parameter value without type
var numPlus3 = function (n) {
    if (n === void 0) { n = 1; }
    return n + n;
};
numPlus(1);
numPlus('sss');
numPlus3(1);
var na = name2('1');
// function have tow types string and number
var numberAndString = function (n) {
    return n === '1' ? parseFloat(n) : n;
};
var ns = numberAndString('1');
var colors = ['red', 'green', 'yellow'];
// Anonymous Function Contextual Typing. typescrpit smart fegure it out what the type is look in that provied arry.
//this is best way for Anonymous Function.
colors.map(function (color) { return color.toUpperCase(); });
// Anonymous Function Contextual Typing. with type
colors.map(function (color) { return color.toUpperCase(); });
//void best way. it is clearn
var hello = function (h) {
    console.log(h);
};
//void without void fuction type
var hello2 = function (h) {
    console.log(h);
};
//void with error
var hello3 = function (h) {
    console.log(h);
    return h;
};
//never
function makeError(str) {
    throw new Error(str);
}
//never with error
function makeError(str) {
    return '';
    throw new Error(str);
}
//never
function continueRun(str) {
    while (true) {
        console.log(str);
    }
}
//never with error
function continueRun2(str) {
    while (true) {
        console.log(str);
    }
    return 'f';
}
