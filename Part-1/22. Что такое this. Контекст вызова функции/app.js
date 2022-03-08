function getThis() {
    console.log(this);
}

// getThis();
// window.getThis();
// console.log(window.getThis);

function getPrice(currency = '$') {
    console.log(this.price + currency);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice, // 1й пример функции в объекте
    getName() { // 2й пример функции в объекте
        console.log(this.name);
    },
    info: {
        information: ['2.3ghz'],
        getInfo: function () { // 3й пример функции в объекте
            console.log(this);
        },
    },
}

const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
}

prod1.getPrice(); // this, это то, что находится перед точкой, в данном случае prod1, в случае выше, это window
prod1.info.getInfo(); // в данном случае this это объект info
prod1.getName();
prod2.getPrice();

prod2.getName = prod1.getName; // Добавили в prod2 функцию из prod1
prod2.getName();

/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/

let str = 'Hello world';
const revertStr = str
    .split('')
    .reverse()
    .join('');
console.log(revertStr);

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    getName,
}

prod3
    .getName() // undefined
    .getPrice(); // undefined.getPrice() - будет ошибка, т.к. у undefined нет такого метода getPrice()
    // Чтобы всё работало, нужно в каждой из этих функций вернуть this - т.е. return this;


// Потеря контекста
const prod4 = {
    name: 'M1',
    price: 300,
}

getPrice.call(prod4); // Метод call принемает this, таким образом мы вызвали в prod4 функцию getPrice, хотя её в нём нет
getPrice.call(prod4, '₽'); // Так же мы можем передавать в call другие аргументы, например вместо $, передадим ₽
getPrice.apply(prod4, ['₽']); // Метод apply аналогичен методу call, только он аргументы принимает ввиде массива

// Потеря контекста
setTimeout(prod3.getPrice, 1000); // undefined$ - получим undefined, потому что setTimeout работает в контексте window, а у него нет свойства price
// Чтобы это поправить, используем bind
const getPriceBind = prod3.getPrice.bind(prod3, '₽');
setTimeout(getPriceBind, 1000); // 200₽ - this теперь в контексте prod3
// bind - это не лучший метод, сохранить контекст можно с помощью стрелочных функций (разберём в следующем уроке)