interface CatProps {
  name: string;
  sex: number;
  age: number;
  weight: number;
  color: string;
}

class Cat implements CatProps {
  name = 'kaka';
  sex = 0;
  age = 0;
  weight = 0;
  color = 'red';
}

let res = new Cat();

console.log(res.age);