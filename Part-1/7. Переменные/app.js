/* Переменные */

// var, let, const
var name = 'Denis';
console.log(name);
name = 'Den';
console.log(name);

var age;
console.log(age);
age = 30;
console.log(age);

var $name = 'Ivan';
var _name = 'Maks';
// var 1name = '';

var useAge = 30;
var user_age = 20;
var UserAge = 40;
var userage = 10;

var car = 'bmw';
var car = 'audi';
console.log(car);

console.clear();

// console.log(nickname); // let не даст обратиться к переменной до её объявления
let nickname = 'rodion';
// let nickname = 'rodion2'; // let не даст дважды объявить переменную в отличии от var
nickname = 'rodion2';
console.log(nickname);

const firstName = 'Tom';
// firstName = 'Jhon'; // const не даст переопределить переменную, т.к. она является константой
// const lastName; // нельзя объявить const без значения
console.log(firstName);

const user = {
    name: 'Denis',
    age: 30
};
console.log(user);
user.age = 25; // Но содержимое объектов и массивов в const можно переопределять по ключу
console.log(user);
