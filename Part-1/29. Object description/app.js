const car = {
    brand: 'Audi',
    year: 2019,
};

// По умолчанию все настройки true
Object.defineProperty(car, 'year', {
    configurable: true, // false - Настройка запрещает удалять или изменять свойство year, но переопределить можно
    enumerable: true, // false - Настройка делает свойство не итерируемым, например метод объекта Object.keys(car) вернёт только brand
    writable: true, // false - Настройка запрещает запись/переопределение свойства
});

// get, set
Object.defineProperty(car, 'age', {
    get: function () { // геттер, срабатывает при чтении car.age
        return `Машина выпущена в ${this.year}`;
    },
    set: function (value) { // сеттер, срабатывает при записи car.age = 2020
        this.year = value;
    },
});

console.log(car.age);

car.age = 2020;
console.log(car.age);

// get и set можно было задать сразу в объекте
// const car = {
//     brand: 'Audi',
//     year: 2019,
//     get age() {
//         return `Машина выпущена в ${this.year}`;
//     },
//     set age (value) {
//         this.year = value;
//     },
// };

Object.defineProperty(window, 'globalVar', {
    set: function (value) {
        console.log(value);
        debugger; // Отслеживаем откуда была вызвана данная функция, чтобы исправить ошибку
    }
});

// Создаём функцию, которая записывает глобальную переменную
// Для примера, как буд то она ломает наш код
function foo() {
    globalVar = 10;
}

foo();

// До того как мы написали Object.defineProperty(window, 'globalVar', ... - значения были 10 после стали undefined
// console.log(globalVar); // 10
// console.log(window.globalVar); // 10