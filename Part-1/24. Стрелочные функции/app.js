const plus = (x, y) => x + y; // Стрелочная функция, в обычном виде она бы выглядела как функция ниже

// function plusFoo(x, y) {
//     return x + y;
// }

const plusRes = plus(1, 2);
console.log(plusRes);

const withoutArgs = () => console.log('Hello world'); // Стрелочная функция без аргументов
const singleArg = x => x * 2; // Стрелочная функция с одним аргументом, можно не указывать скобки
const singleArg1 = (x = 1) => x * 2; // Стрелочная функция с одним аргументом по умолчанию, скобки нужны
const moreActions = (a, b) => { // Стрелочная функция, несколько действий, обязательно указываем return
    a *= 2;
    b *= 3;
    return a + b;
}

// const returnObj = (str = '') => {
//   return {
//       value: str,
//       length: str.length,
//   }
// }

// Эту функцию можно упростить:

const returnObj = (str = '') => ({
    value: str,
    length: str.length,
});

/** Отличия от обычных функций **/

/*
* 1. У стрелочных функций нет псевдоколлекии arguments
* */

/*
* 2. Стрелочные функции не имеют собственного контекста -> this
* */

const obj = {
    firstName: 'Denis',
    age: 30,
    getFirstName() {
        console.log(this); // Вернётся объект obj
    },
    getAge: () => console.log(this), // Вернётся window, т.к. у стрелочной функции нет своего контекста
    // Это можно исправить несколькими способами:
    getAgeArrow: null, // Вернётся объект obj, т.к. this было объявлено в методе который является обычной фукцией, которая имеет контекст
    getAge2() {
        this.getAgeArrow = () => console.log(this); // Присваиваем getAgeArrow стрелочную функию
    },
    getAge3() {
        setTimeout(() => console.log(this)) // Передаём стрелочную функцию как колбэк в setTimeout, без указания времени, тогда вернётся контекст объекта obj
    },
}

obj.getFirstName();
obj.getAge();

obj.getAge2();
obj.getAgeArrow();

obj.getAge3();
