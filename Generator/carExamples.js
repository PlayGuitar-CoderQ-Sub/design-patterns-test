function CarBuilder({ color = "white", weight = 0 }) {
  this.color = color;
  this.weight = weight;
}


// 创建轮胎
CarBuilder.prototype.buildType = function (type) {
  switch (type) {
    case 'small':
      this.tyreType = '小号轮胎'
      this.yreIntro = '正在使用小号轮胎'
      break;
    case 'normal':
      this.tyreType = '中号轮胎'
      this.tyreIntro = '正在使用中号轮胎'
    case 'big':
      this.tyreType = '大号轮胎',
      this.tyreIntro = '正在使用大号轮胎'
  }

  // 创建发动机
  CarBuilder.prototype.buildEngine = function (type) {
    switch (type) {
      case 'small':
        this.engineType = '小马力发动机'
        this.engineIntro = '正在使用小马力发动机'
      case 'normal':
          this.engineType = '小马力发动机'
          this.engineIntro = '正在使用小马力发动机'
      case 'big':
        this.engineType = '小马力发动机'
        this.engineIntro = '正在使用小马力发动机'
    }
  }
}

// 奔驰厂家
function benChiDiretor(type, engine, param) {
  var car = new CarBuilder(param);
  car.buildType(type);
  car.buildEngine(engine);
  return car;
}

var benci = benChiDiretor('small', 'big', { color: 'red', weight: '1600kg' })

console.log(benci);
