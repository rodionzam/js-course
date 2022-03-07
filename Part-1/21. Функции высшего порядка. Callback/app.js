function foo() {
    console.log('Hello world');
}

foo();

foo.field = 'Denis'; // Пусть этот код валидный, но его не рекомендуется использовать.
// Это даёт нам понимание что функции в js являются объектами
console.log(foo.field);

// Функции высшего порядка - это функции которые в качестве аргумента принимают другие функции или возвращают другие функции

/*
const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
}
console.log(newArr); // [5, 4, 4, 4]

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
    newArr2.push(arr[i].toUpperCase());
}
console.log(newArr2); // ['DENIS', 'IVAN', 'MAKS', 'OLGA']
*/

// Перепишем закоментированный код, на функцию высшего порядка

const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) { // Функция обработчик
    return el.length;
}

function nameToUpperCase(el) { // Функция обработчик
    return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);

console.log(result); // [5, 4, 4, 4]
console.log(result2); // ['DENIS', 'IVAN', 'MAKS', 'OLGA']

// Функция высшего порядка, которая будет возвращать другую функцию

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

const testGreeting = greeting('Denis');
console.log(testGreeting); // Возвращает функцию
// ƒ (lastName) {
//     return `Hello, ${firstName} ${lastName}`;
// }

const fullName = testGreeting('Mescheryakov');
console.log(fullName); // Hello, Denis Mescheryakov

// Можно сразу написать так
const fullName2 = greeting('Denis')('Mescheryakov');
console.log(fullName2); // Hello, Denis Mescheryakov

/*--------------------------------------*/
/*
function question(job) {
    if (job === 'developer') {
        return function (name) {
            return `${name}, что такое JavaScript?`;
        };
    } else if (job === 'teacher') {
        return function (name) {
            return `${name}, какой предмет вы ведёте?`;
        };
    }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Denis')); // Denis, что такое JavaScript?
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis')); // Denis, какой предмет вы ведёте?
*/

// Упрощаем код выше (Если есть множество условий, их можно превратить в словарь)
function question(job) {
    const jobDictionary = {
        developer: `что такое JavaScript`,
        teacher: `какой предмет вы ведёте`,
    }

    return function (name) {
        return `${name}, ${jobDictionary[job]}?`;
    };
}

const developerQuestion = question('developer');
console.log(developerQuestion('Denis')); // Denis, что такое JavaScript?
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis')); // Denis, какой предмет вы ведёте?