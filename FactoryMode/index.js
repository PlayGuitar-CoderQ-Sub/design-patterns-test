"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        // 调用factory方法创建产品
        var product = this.factoryMethod();
        // 使用该产品
        return "Creator: \u540C\u4E00\u521B\u5EFA\u8005\u7684\u4EE3\u7801\u4E0E" + product.operation();
    };
    return Creator;
}());
// 创造者1
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
// 创造者2
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
// 对Product的各种实现
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return '{结果为产品1}';
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return '{结果为产品2}';
    };
    return ConcreteProduct2;
}());
// TODO: 实现
function clientCode2(creator) {
    console.log('客户: 我不知道创造者的类别，但它仍然工作。');
    console.log(creator.someOperation());
}
console.log("使用创造者1");
clientCode2(new ConcreteCreator1());
console.log("-------------------------");
console.log("使用创造者2");
clientCode2(new ConcreteCreator2());
