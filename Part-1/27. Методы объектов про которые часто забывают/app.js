// Копирование объектов (Глубокое и Не глубокое)
// Не глубокое
// Пример 1
let obj1 = {
    name: 'Rodion',
}

let obj2 = {
    age: 20,
}

// let newObj1 = obj1; // Это не копирование, тут мы просто ссылаемся на obj1, при редактирование newObj1, мы отредактируем obj1
let newObj1 = Object.assign({}, obj1, obj2);
console.log(newObj1); // {name: 'Rodion', age: 20}

// Пример 2
let obj3 = {
    name: 'Rodion',
    info: {
        skills: ['html', 'css'],
    },
}

let newObj2 = Object.assign({}, obj3);
console.log(obj3 === newObj2); // false - obj3 не равен newObj2, т.к. мы скопировали объект
console.log(obj3.info === newObj2.info); // true - т.к. при не глубоком копировании, вложенные объекты копируются по ссылке,
// и при изменении вложенного объекта в newObj2, изменится вложенный объект и в obj3
// Это иожно решить при помощи глубокого копирования, используя JSON
console.log(newObj2);


// Глубокое
let objJson = JSON.stringify(obj3); // Получаем строку {"name":"Rodion","info":{"skills":["html","css"]}}
let newObj3 = JSON.parse(objJson); // Парсим строку, обратно в объект
// Более короткая запись let newObj3 = JSON.parse(JSON.stringify(obj3));
console.log(obj3.info === newObj3.info); // false - теперь вложенные объекты не равны, мы сделали глубокое копирование
console.log(newObj3);


// Метод возвращающий ключи объекта в виде массива
let keys = Object.keys(obj3);
console.log(keys);


// Получаем значения каждого ключа объекта в виде массива
let values = Object.values(obj3);
console.log(values);


// Метод возвращает ключ значение объекта в виде массива из массивов
let entries = Object.entries(obj3);
console.log(entries);


// Метод из массива ключей и значений, делает нам объект
let fromEntries = Object.fromEntries(entries);
console.log(fromEntries);