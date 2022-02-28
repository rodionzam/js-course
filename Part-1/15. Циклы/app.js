// Циклы: while, do while, for, for of, for in

/*********/
/* while */
/*********/

let i = 0;

while (i < 10) {
    console.log(`i: ${i}`);
    i++
}

// Результат:
/*
* 0
* 1
* 2
* 3
* 4
* 5
* 6
* 7
* 8
* 9
*/

let i2 = 0;

while (i2++ < 10) {
    console.log(`i2: ${i2}`);
}

// Результат:
/*
* 1
* 2
* 3
* 4
* 5
* 6
* 7
* 8
* 9
* 10
*/

let i3 = 10;

while (i3--) { // Цикл останавливается когда происходит false, когда i3 становится 0, он считает это как false и прекращает цикл
    console.log(`i3: ${i3}`);
}

// Результат:
/*
* 9
* 8
* 7
* 6
* 5
* 4
* 3
* 2
* 1
* 0
*/


/************/
/* do while */
/************/

let i4 = 10;

do {
    console.log(`i4: ${i4}`);
} while (i4--);
// То же самое что выше с i3, только в результате на одно выполнение условия больше

// Результат:
/*
* 10
* 9
* 8
* 7
* 6
* 5
* 4
* 3
* 2
* 1
* 0
*/


/*******/
/* for */
/*******/

for (let i5 = 0; i5 < 10; i5++) {
    if (i5 === 5) {
        continue; // Пропускаем итерацию и 5 не будет выведена в консоль
    }
    if (i5 === 8) {
        break; // Останавливаем цикл
    }
    console.log(`i5: ${i5}`);
}

// Результат:
/*
* 0
* 1
* 2
* 3
* 4
* 6
* 7
*/

let str = 'Hello';
let res = '';

for (let i6 = 0; i6 < str.length; i6++) {
    res += str[i6] + '*';
}

console.log(res);

// Результат
/*
H*e*l*l*o*
*/

let colors = ['white', 'black', 'yellow', 'orange'];

for (let i7 = 0; i7 < colors.length; i7++) {
    colors[i7] = colors[i7].toUpperCase();
}

console.log(colors);

// Результат
/*
['WHITE', 'BLACK', 'YELLOW', 'ORANGE']
*/

const users = [
    {
        name: 'Denis',
        age: 30
    },
    {
        name: 'Oleg',
        age: 12
    },
    {
        name: 'Maks',
        age: 25
    },
    {
        name: 'Olga',
        age: 2
    },
];

const usersObj = {};

console.log(users); // [{…}, {…}, {…}, {…}]

for (let i8 = 0; i8 < users.length; i8++) {
    console.log(users[i8].name);
    /*
    * Denis
    * Oleg
    * Maks
    * Olga
    * */
    usersObj[users[i8].name] = users[i8];
}

console.log(usersObj); // {Denis: {…}, Oleg: {…}, Maks: {…}, Olga: {…}}
console.log(usersObj['Denis']); // {name: 'Denis', age: 30}


/**********/
/* for in */
/**********/

for (let key in usersObj) { // for in служит для перебора объектов
    console.log(key);
    console.log(usersObj[key]);
}

// Результат
/*
* Denis
* {name: 'Denis', age: 30}
* Oleg
* {name: 'Oleg', age: 12}
* Maks
* {name: 'Maks', age: 25}
* Olga
* {name: 'Olga', age: 2}
*/


/**********/
/* for of */
/**********/

for (let value of users) { // for of служит для перебора массивов
    console.log(value);
}

/*
* {name: 'Olga', age: 2}
* {name: 'Denis', age: 30}
* {name: 'Oleg', age: 12}
* {name: 'Maks', age: 25}
* {name: 'Olga', age: 2}
* */