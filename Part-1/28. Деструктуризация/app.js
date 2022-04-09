const user = {
    firstName: 'Rodion',
    lastName: 'Zamyatin',
    age: 29,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css', 'js'],
    },
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// console.log(firstName);

const {firstName: name, lastName, age = 35, city = 'Moscow'} = user;
console.log(name, lastName, age, city); // Rodion Zamyatin 29 Moscow

const {
    info: {work, skills},
} = user;
console.log(skills); // ['html', 'css', 'js']

/****************************/
/****************************/

const colors = ['white', 'black', 'red', '#00ff00'];
const [w, b, red, green = 'green'] = colors;
console.log(w, b, red, green); // white black red #00ff00

/****************************/
/****************************/

const names = ['Denis', 'Ivan', 'Maksim'];
const [, name2, name3] = names; // За счет запятых, мы можем пропускать значения
console.log(name2, name3); // Ivan Maksim

/****************************/
/****************************/

const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
console.log(key, value); // key value

/****************************/
/****************************/

const names2 = ['Denis', 'Ivan', 'Maksim'];
const [name1, ...otherNames] = names2; // Получаем первое имя, а остальные массивом
console.log(name1, otherNames); // Denis (2) ['Ivan', 'Maksim']

const [...newNames] = names2; // Получаем копию массива
console.log(newNames); // ['Denis', 'Ivan', 'Maksim']

// Либо скопировать массив ещё можно так
const newNames2 = [...names2];
console.log(newNames2); // ['Denis', 'Ivan', 'Maksim']
console.log(...newNames2); // Denis Ivan Maksim

const colorNames = ['some value', ...colors, ...names];
console.log(colorNames); // ['some value', 'white', 'black', 'red', '#00ff00', 'Denis', 'Ivan', 'Maksim']

/****************************/
/****************************/

const newUser = {...user, age: 30};
console.log(newUser); // {firstName: 'Rodion', lastName: 'Zamyatin', age: 30, info: {…}}

const {
    info: {
        skills: [html, css, js]
    }
} = newUser;
console.log(html, css, js); // html css js

/****************************/
/****************************/

// Деструкторизация в рамках функции, когда передаём что то в параметры
function myPerson({ lastName = '', firstName = '', info: {skills} = {} }) {
    console.log(lastName, firstName, skills); // Zamyatin Rodion (3) ['html', 'css', 'js']
}

myPerson(newUser);

/****************************/
/****************************/

function foo(x, y) {
    console.log(arguments);

    console.log([].slice.call(arguments)); // [1, 2] - ниже, более удобная и короткая запись

    const [...args] = arguments;
    console.log(args); // [1, 2]
}

foo(1, 2);

/****************************/
/****************************/

function foo2(x, y, ...others) {
    console.log(others); // [5, 6, 9, 18]
}

foo2(1, 2, 5, 6, 9, 18);

/****************************/
/****************************/

const numbers = [2, 3];

function foo3(x, y) {
    console.log(x, y); // 2 3
}

foo3(...numbers);