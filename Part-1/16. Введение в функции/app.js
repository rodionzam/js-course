//****************************//
//*** function declaration ***//
//****************************//
function sayHello(firstName, lastName = "Default") {
    if (!firstName) return console.error("Не указано имя");
    console.log(firstName, lastName);
    console.log("Hello world");
    return `Hello ${firstName} ${lastName}`; // После return функция прекращает своё выполнение
}

let res = sayHello("Rodion", "Zamyatin");
let res2 = sayHello("Irina", "Belyaeva") + "!";
let res3 = sayHello();

console.log(res3); // Если не указать в функции return она вернёт undefined

//*** Область видимости ***//
let x = 10;

function foo() {
    //x = 20; // Плохая практика переопределять глобальные переменные внутри функции, правильно будет объявить переменную внутри функции
    // Способ выше можно использовать, если мы объявим переменную в аргументах функции function foo(x), объявленный в вргументах параметр, является локальным и доступен только внутри функции
    let x = 20;
    console.log(x);
    // return x; - это для того, если мы хотим получить новое значение переменно вне функции
}

foo();

console.log(x);

// В объектах
const user = {
    name: "Rodion",
    age: 29
};

function getObj(obj) {
    console.log(obj);
    obj.name = "Rodya";
}

getObj(user);

/* Результат:
{name: 'Rodion', age: 29}
    age: 29
    name: "Rodya" // Т.к. объекты передаются по ссылке, тут содержится обновлённый объект
*/

// Чтобы небыло таких косяков, объект нужно копировать (Передаваемые объекты не должны изменяться)


//***************************//
//*** function expression ***//
//***************************//
const square = function (x = 5) {
    return x * x;
}
const squareResult = square();
console.log(squareResult);
// Отличие function declaration в том, что мы присваиваем функию переменной и с этим связывается нюанс, мы не можем вызвать функцию, до её фактического присвоения
// function declaration можно везде объявить в отличии от function expression

//Самовызывающаяся функция
(function (msg) {
    console.log(msg);
}("Hello world"));


//*****************//
//*** arguments ***//
//*****************//
function arg() {
    console.log(arguments);
}

arg();

/* Результат:
Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
    callee: ƒ arg()
    length: 0
    Symbol(Symbol.iterator): ƒ values()
    [[Prototype]]: Object
*/

// Это не массив, это итерируемая коллекция (псевдо массив), это объект который можно перебирать циклами

function arg2(x) {
    console.log(arguments);
    console.log(arguments[1]); // Так мы получим строку - some string
}

arg2(11, "some string", [1, 2, 3]);

// Мы увиди все аргументы которые были переданы в данную функцию
/* Результат:
Arguments(3) [11, 'some string', Array(3), callee: ƒ, Symbol(Symbol.iterator): ƒ]
    0: 11
    1: "some string"
    2: (3) [1, 2, 3]
    callee: ƒ arg2(x)
    length: 3
    Symbol(Symbol.iterator): ƒ values()
    [[Prototype]]: Object
some string
*/

function arg3(x) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

arg3(11, "some string", [1, 2, 3]);

// Данная коллекция редко используется на практике, т.к. это не массив, и поэтому нельзя использовать различные полезные методы массивов
// Данная коллекция существует во всех функциях, но в стрелочных функциях её нет