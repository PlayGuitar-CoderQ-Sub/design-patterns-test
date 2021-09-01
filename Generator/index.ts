interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
    //@ts-ignore
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push("ProductA1");
    }

    public producePartB(): void {
        this.product.parts.push("ProductB1");
    }

    public producePartC(): void {
        this.product.parts.push("ProductC1");

    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts ${this.parts.join(', ')}\n`)
    }
}

class Director {
    //@ts-ignore
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildFullFeatureProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log("standard basic product");
    director.buildFullFeatureProduct();
    builder.getProduct().listParts();

    console.log("custom product");
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director)