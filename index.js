var Product = /** @class */ (function () {
    function Product(product_id, product_name, product_price, product_qty) {
        this.id = product_id;
        this.name = product_name;
        this.price = product_price;
        this.qty = product_qty;
    }
    Product.prototype.tax = function () {
        return (this.price * 0.15) + this.price;
    };
    Product.prototype.discount = function () {
        return this.price - 10;
    };
    Product.prototype.Search = function () {
        return "iphone";
    };
    return Product;
}());
var User = {
    'id': 1,
    'name': String,
    'isactive': true
};
var users = [
    { 'id': 1, 'name': 'suha', 'isactive': true },
    { 'id': 2, 'name': 'suha', 'isactive': true },
    { 'id': 3, 'name': 'suha', 'isactive': true }
];
users.forEach(function (item) {
    console.table(item);
});
var add = function (a, b) {
    return a + b;
};
var add1 = function (a, b) {
    return a + b;
};
function msg() {
    return "welcom";
}
var mytuple;
mytuple = ["suha", 2000, false];
console.log(mytuple[0]);
mytuple.forEach(function (e) {
    console.log(e);
});
console.log(add(15, 30));
var prod = new Product(1, "iphone 15 pro", 4999, true);
console.log(prod.name);
console.log(prod.price);
