interface AbstractFactory {
    createProductA(): AbstractProductA
    createProductB(): AbstractProductB
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2()
    }
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return "产品 A1的结果。"
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return "产品 A2的结果。"
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: AbstractProductA): string
}

class ConcreteProductB1 implements AbstractProductB{
    public usefulFunctionB(): string {
        return "产品B1的结果"
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `B1与第三方合作的结果${result}`
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return "产品B2的结果"
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return  `B2与第三方合作的结果${result}`
    }
}

// TODO: 实现
function clientCode1(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productA.usefulFunctionA())
    console.log(productB.usefulFunctionB())
    console.log(productB.anotherUsefulFunctionB(productA))
}

console.log("使用第一个工厂类测试");
clientCode1(new ConcreteFactory1());

console.log("--------------------------------")

console.log("使用第二个工厂类测试");
clientCode1(new ConcreteFactory2())