const user = {
    firstName: 'Rodion',
    age: 29,
    isAdmin: true,
    email: 'test@test.ru',
    'user-address': { // В кавычках пишутся сложные названия ключей, например через тире
        city: 'Mytishi'
    },
    skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address']; // Сложные названия ключей опять же в кавычках, через точку будет ошибка
value = user['user-address'].city;
value = user['user-address']['city']; // То же самое что в строке выше
value = user[prop][0];

user.firstName = 'Rodya'; // Перезаписываем значение ключа

value = user.firstName;

user.info = 'Some info'; // Создали новый ключ со значением

value = user.info;

user['user-address'].city = 'Moscow'; // Перезаписали город
user['user-address'].country = 'Russia'; // Создали новое свойство страна

//user.plan.basic = 'basic'; // Добавляем в несуществующий объект вложенный объект, будет ошибка
// Для начала нужно создать пустой объект user.plan = {};

user.plan = {};
user.plan.basic = 'basic';

value = user.plan.basic;

console.log(value);
console.log(user);

/* ДЗ */
console.log('Домашнее задание');

// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

console.log('1. Создать объект с полем product, равным ‘iphone’');
const phone = {
    product: 'iPhone'
};

console.log('2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’');
phone.price = 1000;
phone.currency = 'dollar';

console.log('3. Добавить поле details, которое будет содержать объект с полями model и color');
phone.details = {};
phone.details.model = '8 Plus';
phone.details.color = 'Red';

console.log(phone);