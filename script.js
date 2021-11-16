/*window.addEventListener("load", function () {
    console.log("Az oldal betöltődött");
});

var myFirstString = 'ez "egy string';
var mySecondString = "ez is 'egy' string";
var myThirdString = `
ez
"egy
'több'
soros
string
`;
var myFourthString=`ez egy "több" 'soros' ${mySecondString} string`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 6478999;

var myFirstBoolean = true;
var myFirstBoolean = false;

var myFirstArray = ["1984", "Lord of the Rings", "Mester és a Margarita", "Galaxis utikalauz stopposoknak", "Vita Brevis"];

var mySecondArray = [1984, "Lord of the Rings", "Mester és a Margarita", "Galaxis utikalauz stopposoknak", "Vita Brevis"];

var myFirstObject =
{
    title: "Lord of the Rings",
    publicationDate: 1954,
    translations: ["hu", "de", "fr", "jp"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

add(1, 2);
add(17948, 18773);

var subtraction = function (a, b) {
    if (a > b) {
        console.log(a - b);
    }
    else if (a === b) {
        console.log("A végeredmény nulla");
        console.log(a - b);
    }
    else {
        console.log(b - a);
    }
}

subtraction(3, 6);
subtraction("15", 15);
add("15", 15);
add("Nyitva", "tartás");
subtraction("Nyitva", "tartás");

function ifElseCheck(text) {
    if (text === "hello") {
        console.log("text az volt, hogy hello");
    }
    else if (text === "hello") {
        console.log("text megint az volt, hogy hello");
    }

    if (text === "hello") {
        console.log("text már megint hello");
    }
}

ifElseCheck("hello");

function compare(a, b) {
    console.log("== ", a == b);
    console.log("=== ", a === b);
    var c = a + b;
    console.log(typeof (c));
    console.log(c);
}

compare("1984", 1984);
compare("15", "15");

var myFirstFunctionVariable = function () {
    console.log("Ez egy függvény amit változóban tároltunk el");
};

myFirstFunctionVariable();
(function () {
    console.log("?");
}());

var anotherVar = myFirstFunctionVariable();
console.log(typeof anotherVar);
console.log(anotherVar);

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();

console.log(typeof anotherVar2);

function theLastFunction(obj1, obj2) {
    console.log("obj1 értéke: ", obj1);
    console.log("obj1 típusa: ", typeof obj1);
    console.log("obj2 értéke: ", obj2);
    console.log("obj2 típusa: ", typeof obj2);
    console.log(obj2());
}
theLastFunction("hello", function () {
    return "I'm callign the last function";
});

/*
    var window=
    {
        addEventListener: function (eventName,eventFunction)
        {

        }
    }
*/

console.log(myFirstGlobalVar);
var myFirstGlobalVar = 0;
console.log(myFirstGlobalVar);

//console.log(mySecondGlobalVar);
let mySecondGlobalVar = 1;
console.log(mySecondGlobalVar);

//console.log(myThirdGlobalVar);
const myThirdGlobalVar = 2;
console.log(myThirdGlobalVar);

console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

(function () {
    //var anotherFunctionVar=undefined;
    console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

    var myFirstFunctionVar = 3;
    let mySecondFunctionVar = 4;
    const myThirdFunctionVar = 5;

    console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);
    (function () {
        console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
        console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);
        (function () {
            console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
            console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);
            var a = 6;
            console.log(a);
        }())
    }())
}())
//console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);

function f1() {
    console.log(a);
    var a = undefined;
    console.log(a);
    a = 7;
    console.log(a);
}
f1();

function f2() {
    console.log(a);
    var a;
    console.log(a);
    a = 8;
    console.log(a);
}
f2();

function f3() {
    //console.log(a);
    let a;
    console.log(a);
    a = 8;
    console.log(a);
}
f3();

function f4() {
    //console.log(a);
    const a = 9;
    console.log(a);
    //a = 10;
    //console.log(a);
}
f4();

function f5() {
    let b;
    console.log(b);
    console.log(typeof b);
    /*
    let c=typeof b;
    console.log(typeof c);
    */
}
f5();

function f6() {
    d = 12;
    console.log(d);
    if (true) {
        (function () {
            var d = 11;
            console.log(d);

        }())
    }
    console.log(d);
}
f6();
console.log(d);

function f7() {

    if (true) {
        let e = 13;
        console.log(e);
    }
    //console.log(e);
}
f7();

function f8() {
    const ls = ["a", "b", "c", "d", "e", "f", true];

    for (let i = 0; i < ls.length; i++) {
        const item = ls[i];
        console.log(item);
    }
    //console.log(i);

    for (const item of ls) {
        console.log(item);

    }

    for (const key in ls) {
        const item = ls[key];
        console.log(item);
        console.log(typeof key);
    }
    console.log(f9(ls));
}
f8();

function f9(arrayFromParam) {
    console.log(arrayFromParam);

    let abc = "";
    for (const item of arrayFromParam) {
        if (item !== true) {
            abc += item;
        }
    }
    //console.log(abc);
    return abc;
}

//arrow
/*const f10=(text)=>{
    return `<div>${text}</div>`;
};*/

const f10 = (text) => `<div>${text}</div>`;

console.log(f10("welcome"));

window.addEventListener("load", function () {
    const f9Result = f9(["hello", "bye"]);
    document.getElementById("root").insertAdjacentHTML("afterbegin", f9Result);
    document.getElementById("root").insertAdjacentHTML("afterbegin", f10("goodnight"));
})