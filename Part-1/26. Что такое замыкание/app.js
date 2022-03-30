// Замыкание - это функция, которая ссылается на свободные переменные
// Свободные переменные - это переменные которые небыли переданы этой функции как параметры и небыли объявлены внутри этой функции как локальные переменные

function getFullName(firstName, lastName) {
    return function () {
        return `${firstName} ${lastName}`;
    }
}

const getName = getFullName('Denis', 'Mescheryakov');
console.log(getName());

function updateValue(val = 0) {
    let x = val;
    return function (num = 0) {
        return (x += num);
    }
}

const updtVal = updateValue(2);
const updtVal2 = updateValue(4);
console.log(updtVal(1)); // 3
console.log(updtVal(0)); // 3
console.log(updtVal2(2)); // 6
console.log(updtVal2(0)); // 6

/****************************************************************************/
/****************************************************************************/

function checkCred() {
    const login = 'test';
    const password = 'somePassword';

    return {
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        }
    }
}

const check = checkCred();
console.log(check); // {checkLogin: ƒ, checkPassword: ƒ}
console.log(check.checkLogin('test')); // true

/****************************************************************************/
/****************************************************************************/

function closureExample() {
    const arrOfFunc = [];
    let value = '';

    for (let i = 0; i < 10; i++) {
        value += i;
        arrOfFunc.push(function () {
            console.log(value, i);
        });
    }

    console.log(arrOfFunc);
    return arrOfFunc;
}

const res = closureExample();
res[0]();
res[5]();