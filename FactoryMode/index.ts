abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    // 调用factory方法创建产品
    const product = this.factoryMethod();
    // 使用该产品
    return `Creator: 同一创建者的代码与${product.operation()}`;
  }
}

// 创造者1
class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
      return new ConcreteProduct1();
    }
}

// 创造者2
class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string
}

// 对Product的各种实现
class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{结果为产品1}'
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{结果为产品2}'
  }
}

// TODO: 实现
function clientCode2(creator: Creator) {
  console.log('客户: 我不知道创造者的类别，但它仍然工作。');
  console.log(creator.someOperation());
}

console.log("使用创造者1");
clientCode2(new ConcreteCreator1())
console.log("-------------------------");
console.log("使用创造者2");
clientCode2(new ConcreteCreator2())