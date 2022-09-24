const str = new String('hello world');
// console.log(str);

function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
    this.price = newPrice;
};

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 200, 25);

// console.log(apple);
// console.log(samsung);

const protoForObj = {
    sayHello() {
        return 'Hello world';
    },
};

const obj = Object.create(protoForObj, {
    firstName: {
        value: 'Denis',
    }
});

//****************************************//
//****************************************//

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

User.prototype.seyHello = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

const user = new User('Denis', 'Mescheryakov');

// Customer
function Customer(firstName, lastName, membership) {
    User.call(this, firstName, lastName);

    this.membership = membership;
}
// Если передается много параметров, можно сделать так apply(arguments)
// function Customer(firstName, lastName, membership) {
//     User.apply(this, arguments);
//
//     this.membership = membership;
// }

// При наследовании мы потеряли методы getFullName и seyHello в прототипе, для этого нам нужно наследовать прототип от User:
Customer.prototype = Object.create(User.prototype);
// Но после этого действия, мы перезаписали прототип и потеряли constructor: Customer, возвращаем его:
Customer.prototype.constructor = Customer;

// Так же мы можем определить свои методы в прототипе, но обязательно после двух строчек выше, иначе они перезапишут новые методы
Customer.prototype.getMembership = function () {
    return this.membership.toUpperCase();
}

const customer = new Customer('Rodion', 'Zamyatin', 'basic');

//****************************************//
//***************** ES6 ******************//
//****************************************//

const methodName = 'setPrice';

class ProductES {
    constructor(brand, price, discount) {
        this._brand = brand;
        this.price = price;
        this.discount = discount;
    }

    get brand() {
        return this._brand;
    }

    set brand(name) {
        this._brand = name;
    }

    getPriceWithDiscount() {
        return (this.price * (100 - this.discount)) / 100;
    }

    [methodName](newPrice) {
        this.price = newPrice;
    }

    static plus(x, y) {
        return x + y;
    }
}

const newProduct = new ProductES('Samsung', 200, 10);
console.log(newProduct);

class UserES {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class CustomerES extends UserES {
    constructor(firstName, lastName, membership) {
        super(firstName, lastName);
        this.membership = membership;
    }
    getFullName() {
        const parentRes = super.getFullName();
        return `${parentRes}, membership: ${this.membership}.`;
    }
}

const customerEs = new CustomerES('Rodion', 'Zamyatin', 'basic');
console.log(customerEs);
console.log(customerEs.getFullName());