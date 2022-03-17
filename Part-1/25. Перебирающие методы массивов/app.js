/*
* Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
*
* Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку,
* задаваемую в передаваемой функции.
*
* Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в
* передаваемой функции.
*
* Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию,
* заданному в передаваемой функции.
*
* Метод map() создаёт новый массив с результатом вызова указанной функции для каждого
* элемента массива.
*
* Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-
* направо), сводя его к одному значению.
*/

const users = [
    {
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];

// forEach
users.forEach((user, i, arr) => {
    console.log(user, i, arr);
});

// filter
const userLess30 = users.filter(user => user.age < 30);
console.log(userLess30);

const activeUser = users.filter(user => user.isActive);
console.log(activeUser);

// map
const usersName = users.map(user => ({name: user.name, age: user.age}));
console.log(usersName);

// reduce
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
console.log(totalBalance);

const usersObj = users.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
}, {});
console.log(usersObj);

// some/every
const isMale = users.some(user => user.gender === "male"); // true - хотябы 1 пользователь, со значением male
const isAllMale = users.every(user => user.gender === "male"); // false - т.к. не все пользователи со значением male
const isAll18 = users.every(user => user.age > 18); // true - т.к. все пользователи старше 18
console.log(isMale);
console.log(isAllMale);
console.log(isAll18);

// find
const user = users.find(user => user.name === 'Valencia Carrillo');
console.log(user);

// sort
const strArr = ['Denis', 'Bill', 'Anna'];
strArr.sort();
console.log(strArr);

const numArr = [10, 7, 44, 32];
//numArr.sort(); // [10, 32, 44, 7] - чтобы сортировка была правильной, нужно передать колбэк
numArr.sort((prev, next) => prev - next); // [7, 10, 32, 44]
console.log(numArr);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);