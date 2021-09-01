/**
 * @description 重构一个具有很多参数的构造函数
 */

class CarBuilder {
  constructor(engine, weight, height, color, tyre, name, type) {
    this.engine = engine;
    this.weight = weight;
    this.height = height;
    this.color = color;
    this.tyre = tyre;
    this.name = name;
    this.tyre = type;
  }
}

const BenChi = new CarBuilder('大马力发动机', '2ton', 'white', '大号轮胎', '奔驰', 'Amg')