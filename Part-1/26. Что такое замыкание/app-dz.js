/*
* Задание 1
*
* Создайте функцию которая бы умела делать:
*
* minus(10)(6); // 4
* minus(5)(6); // -1
* minus(10)(); // 10
* minus()(6); // -6
* minus()(); // 0
*
* Подсказка, функция minus должна возвращать другую функцию.
*/

function minus(a = 0) {
    return function (b = 0) {
        return a - b;
    }
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

/*
* Задание 2
*
* Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
*
* function multiplyMaker ...
* const multiply = multiplyMaker(2);
*
* multiply(2); // 4 (2 * 2)
* multiply(1); // 4 (4 * 1)
* multiply(3); // 12 (4 * 3)
* multiply(10); // 120 (12 * 10)
*/

function multiplyMaker(a) {
    let res = a;

    return function (b) {
        return res *= b;
    }
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

/*
* Задание 3
*
* Реализовать модуль, который работает со строкой и имеет методы:
*
* a. установить строку
* i. если передано пустое значение, то установить пустую строку
* ii. если передано число, число привести к строке
* b. получить строку
* c. получить длину строки
* d. получить строку-перевертыш
*
* Пример:
* модуль.установитьСтроку(‘abcde’);
* модуль.получитьСтроку(); // ‘abcde’
* модуль.получитьДлину(); // 5
*/

function strModule() {
    let valStr;

    return {
        setStr(e = '') {
            valStr = String(e);
        },
        getStr() {
            return valStr;
        },
        getStrLength() {
            return valStr.length;
        },
        getStrReverse() {
            return valStr.split('').reverse().join('');
        },
    }
}

const str = strModule();

str.setStr('abcde');

console.log(str.getStr());
console.log(str.getStrLength());
console.log(str.getStrReverse());

/*
* Задание 4
*
* Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
* Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
*
* модуль.установитьЗначение(10); // значение = 10
* модуль.прибавить(5); // значение += 5
* модуль.умножить(2); // значение *= 2
* модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
*
* Также можно вызывать методы цепочкой:
*
* модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
*/

function calcModule() {
    let int;

    return {
        setInt(e) {
            int = Number(e);
            return this;
        },
        plusInt(e) {
            int += Number(e);
            return this;
        },
        minusInt(e) {
            int -= Number(e);
            return this;
        },
        multiplyInt(e) {
            int *= Number(e);
            return this;
        },
        divideInt(e) {
            int /= Number(e);
            return this;
        },
        powInt(e) {
            int = Math.pow(int, e);
            return this;
        },
        getInt() {
            return parseFloat(int.toFixed(2));
        },
    }
}

const calc = calcModule();
calc.setInt(10);
calc.plusInt(5);
calc.multiplyInt(2);
console.log(calc.getInt());

const calc2 = calcModule();
calc2.setInt(10).powInt(2);
console.log(calc2.getInt());