const str = new String('hello world');
// console.log(str);

function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function () {
        return (this.price * (100 - this.discount)) / 100;
    }
    this.priceWithDiscount = this.getPriceWithDiscount();
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 200, 25);

console.log(apple);
console.log(samsung);