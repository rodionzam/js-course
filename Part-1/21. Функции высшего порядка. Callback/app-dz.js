/*
* Задание 1
*
* Практическое задание по функциям высшего порядка
* Создать функции:
*
* - первая функция принимает массив и колбэк (одна для всех вызовов)
* - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
*
* Первая функция возвращает строку “New value: ” и результат обработки:
*
* firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
* firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
* firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
* “New value: Jhon is 45, Aaron is 20,”
* firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
*
* Имена функций должны быть как в примере!
*
* Подсказка: secondFunc должна быть представлена функцией, которая принимает
* один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

function firstFunc(arr, fn) {
    let res = 'New value: ';
    for (let i = 0; i < arr.length; i++) {
        res += fn(arr[i]);
    }
    return res.trim();
}

function handler1(el) {
    return el.charAt(0).toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
    return el + '0, ';
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
    return el.name + ' is ' + el.age + ', ';
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));

/*
* Задание 2
*
* Практическое задание по функциям высшего порядка
* Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.")
*
* функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.
*
* Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
*/

function every(arr, fn) {
    if (!Array.isArray(arr)) return new Error('The first argument should be an array');
    if (!fn || typeof fn !== 'function') return new Error('The second argument should be an function');

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

function handlerEvery (el) {
    return el > 5;
}

console.log(every([8, 56, 7, 6, 11, 9, 84, 12], handlerEvery));