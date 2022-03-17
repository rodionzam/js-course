/*
* Задание 1
*
* На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
* каждый элемент которого будет хранить информацию о числе и его четности:
*
* [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/

const arrNum1 = [1, 2, 3, 5, 8, 9, 10];
const arrNumRes1 = arrNum1.map(num => ({digit: num, odd: Boolean(num % 2)}));
console.log(arrNumRes1);

// Ответ преподавателя
/*
const initialValue = [1,2,3,5,8,9,10];
const convertedArray = initialValue.map(num => ({
    value: num,
    odd: Boolean(num % 2)
}));
*/


/*
* Задание 2
*
* Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
*/

const arrNum2 = [12, 4, 50, 1, 0, 18, 40];
const arrNumRes2 = arrNum2.some(num => num === 0);
console.log(arrNumRes2);

// Ответ преподавателя
/*
const initialValue = [12, 4, 50, 1, 0, 18, 40];
const zeroExist = initialValue.some(num => num === 0);
*/


/*
* Задание 3
*
* Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
*/

const arrStr = ['yes', 'hello', 'no', 'easycode', 'what'];
const arrStrRes = arrStr.every(str => str.length > 3);
console.log(arrStrRes);

// Ответ преподавателя
/*
const initialValue = ['yes', 'hello', 'no', 'easycode', 'what'];
const strLength = initialValue.every(str => str.length >= 3);
*/


/*
* Задание 4
*
* Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
*
* [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
* {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
* {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
*
* Напишите функцию, которая из элементов массива соберет и вернёт
* строку, основываясь на index каждой буквы. Например:
* [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
*/

const arrChar = [
    {char: "a", index: 12}, {char: "w", index: 8},
    {char: "Y", index: 10}, {char: "p", index: 3},
    {char: "p", index: 2}, {char: "N", index: 6},
    {char: " ", index: 5}, {char: "y", index: 4},
    {char: "r", index: 13}, {char: "H", index: 0},
    {char: "e", index: 11}, {char: "a", index: 1},
    {char: " ", index: 9}, {char: "!", index: 14},
    {char: "e", index: 7}
];
arrChar.sort((prevChar, nextChar) => prevChar.index - nextChar.index);
const arrCharRes = arrChar.map(charObj => charObj.char).join('');
console.log(arrCharRes);

// Ответ преподавателя
/*
const initialValue = [
    {char:"a",index:12},
    {char:"w",index:8},
    {char:"Y",index:10},
    {char:"p",index:3},
    {char:"p",index:2},
    {char:"N",index:6},
    {char:" ",index:5},
    {char:"y",index:4},
    {char:"r",index:13},
    {char:"H",index:0},
    {char:"e",index:11},
    {char:"a",index:1},
    {char:" ",index:9},
    {char:"!",index:14},
    {char:"e",index:7}
];

function getStr(arr) {
    const cloned = arr.slice();

    return cloned
        .sort((prev, next) => prev.index - next.index)
        .reduce((acc, { char }) => acc + char, '');
}

console.log(str(initialValue))
*/


/*
* Задание 5
*
* Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
*/

const arrArr = [[14, 45], [1], ['a', 'c', 'd']];
arrArr.sort((prevArr, nextArr) => prevArr.length - nextArr.length);
console.log(arrArr);

// Ответ преподавателя
/*
const initialValue = [  [14, 45],  [1],  ['a', 'c', 'd']  ];
initialValue.sort((prev, next) => prev.length - next.length);
console.log(initialValue)
*/


/*
* Задание 6
*
* Есть массив объектов:
*
* [
* {cpu: 'intel', info: {cores:2, сache: 3}},
* {cpu: 'intel', info: {cores:4, сache: 4}},
* {cpu: 'amd', info: {cores:1, сache: 1}},
* {cpu: 'intel', info: {cores:3, сache: 2}},
* {cpu: 'amd', info: {cores:4, сache: 2}}
* ]
*
* Отсортировать их по возрастающему количеству ядер (cores).
*/

const arrObj = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 4, cache: 2}}
];
arrObj.sort((prevObj, nextObj) => prevObj.info.cores - nextObj.info.cores);
console.log(arrObj);

// Ответ преподавателя
/*
const initialValue = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

initialValue.sort((prev, next) => prev.info.cores - next.info.cores);
*/


/*
* Задание 7
*
* Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
*
* let products = [
* {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
* {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
* {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
* {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
* ];
*
* filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
*/

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

const filterCollection = (arrProducts, priceMin, priceMax) => products.filter(prod => prod.price >= priceMin && prod.price <= priceMax).sort((prevProd, nextProd) => prevProd.price - nextProd.price);
console.log(filterCollection(products, 15, 30));

// Ответ преподавателя
/*
let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(prod, min, max) {
    return prod
        .filter(({price}) => price >= min && price <= max)
        .sort((prev, next) => prev.price - next.price)
}
*/
