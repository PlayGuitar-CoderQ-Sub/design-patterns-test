"use strict";
var ConcreteFactory1 = /** @class */ (function () {
    function ConcreteFactory1() {
    }
    ConcreteFactory1.prototype.createProductA = function () {
        return new ConcreteProductA1();
    };
    ConcreteFactory1.prototype.createProductB = function () {
        return new ConcreteProductB1();
    };
    return ConcreteFactory1;
}());
var ConcreteFactory2 = /** @class */ (function () {
    function ConcreteFactory2() {
    }
    ConcreteFactory2.prototype.createProductA = function () {
        return new ConcreteProductA2();
    };
    ConcreteFactory2.prototype.createProductB = function () {
        return new ConcreteProductB2();
    };
    return ConcreteFactory2;
}());
var ConcreteProductA1 = /** @class */ (function () {
    function ConcreteProductA1() {
    }
    ConcreteProductA1.prototype.usefulFunctionA = function () {
        return "产品 A1的结果。";
    };
    return ConcreteProductA1;
}());
var ConcreteProductA2 = /** @class */ (function () {
    function ConcreteProductA2() {
    }
    ConcreteProductA2.prototype.usefulFunctionA = function () {
        return "产品 A2的结果。";
    };
    return ConcreteProductA2;
}());
var ConcreteProductB1 = /** @class */ (function () {
    function ConcreteProductB1() {
    }
    ConcreteProductB1.prototype.usefulFunctionB = function () {
        return "产品B1的结果";
    };
    ConcreteProductB1.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "B1\u4E0E\u7B2C\u4E09\u65B9\u5408\u4F5C\u7684\u7ED3\u679C" + result;
    };
    return ConcreteProductB1;
}());
var ConcreteProductB2 = /** @class */ (function () {
    function ConcreteProductB2() {
    }
    ConcreteProductB2.prototype.usefulFunctionB = function () {
        return "产品B2的结果";
    };
    ConcreteProductB2.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "B2\u4E0E\u7B2C\u4E09\u65B9\u5408\u4F5C\u7684\u7ED3\u679C" + result;
    };
    return ConcreteProductB2;
}());
// TODO: 实现
function clientCode1(factory) {
    var productA = factory.createProductA();
    var productB = factory.createProductB();
    console.log(productA.usefulFunctionA());
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
console.log("使用第一个工厂类测试");
clientCode1(new ConcreteFactory1());
console.log("--------------------------------");
console.log("使用第二个工厂类测试");
clientCode1(new ConcreteFactory2());
