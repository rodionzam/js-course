/*
* Задание 1
*
* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение
*
* Пример вызова:
* multiply(1,2,3) => результат 6 (1*2*3);
*
* Если нет ни одного аргумента, вернуть ноль: multiply() // 0
*/

function multiply(x) {
    if (arguments.length !== 0) {
        let res = 1;

        for (let i = 0; i < arguments.length; i++) {
            res *= arguments[i];
        }

        return res;
    } else {
        return 0;
    }
}

console.log(multiply(2, 4, 5, 6));
console.log(multiply());

/*
* Задание 2
*
* Создать функцию, которая принимает строку и возвращает строку-перевертыш:
*
* Примеры вызовов и результаты
*
* reverseString('test') // "tset"
* reverseString('') // ''
* reverseString(null) // llun
* reverseString(undefined)// denifednu
* reverseString()// denifednu
*/

function reverseString(str) {
    let strToString = String(str);
    let res = '';

    for (let i = strToString.length; i--;) {
        res += strToString[i];
    }

    return res;
}

console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

/*
* Задание 3
*
* Практическое задание по функциям
* Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
*
* getCodeStringFromText("hello") // “104 101 108 108 111”
*
* подсказка: в решении задачи вам помогут методы charCodeAt и trim
*/

/*
* charCodeAt - метод показывающий юникод-значение символа
* trim - метод удаляет пробелы вначале и вконце строки
* */

function getCodeStringFromText(str) {
    let strToString = String(str);
    let res = '';

    for (let i = 0; i < strToString.length; i++) {
        res += strToString[i].charCodeAt() + " ";
    }

    return res.trim();
}

console.log(getCodeStringFromText("hello"));

/*
* Задание 4
*
* Практическое задания по функциям
* Создать функцию угадай число.
*
* Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
* Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").
* Если переданно не число то верните ошибку return new Error("Please provide a valid number");
*
* Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”
* если нет то строку “You are lose, your number is 8, the random number is 5”.  Числа в строке указаны как пример вы подставляете реальные числа.
*
* Если переданно число в виде строки оно должно быть преобразованно к числу.
*/

/*
* Math.random() - рандомное число от 0 (включительно) до 1 (но не включая 1)
* Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom - максимум и минимум включаются
* */

function guessTheNumber(num) {
    let strToNum = Number(num);
    let minRandom = 0;
    let maxRandom = 10;
    let numRandom = '';

    if (isNaN(strToNum)) {
        return new Error("Please provide a valid number");
    } else if (strToNum < 0 || strToNum > 10) {
        return new Error("Please provide number in range 0 - 10");
    } else {
        numRandom = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;

        if (strToNum === numRandom) {
            return "You win!";
        } else {
            return `You are lose, your number is ${strToNum}, the random number is ${numRandom}`;
        }
    }
}

console.log(guessTheNumber(8));