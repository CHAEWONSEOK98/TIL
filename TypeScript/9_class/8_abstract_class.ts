// Abstract class
// 자제로는 인스턴스화 할 일이 없지만, 공유되는 값을 정의하고 싶을 때 사용
// 다른 곳에서 상속받을 때

abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// 직접적으로 선언할 수 없다.
// const modelWithId = new ModelWithId(1);

// extenstion 사용할 때 사용
class Product extends ModelWithId {}
const product = new Product(1);

// abstract method를 사용하면 상속을 받았을 때 메소드의 구현을 강제할 수 있다.
abstract class ModelWithAbstractMethod {
  abstract show(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  show(name: string): string {
    return `show ${name}`;
  }
}
