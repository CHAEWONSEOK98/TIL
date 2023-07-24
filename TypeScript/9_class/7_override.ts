// Override

class Parent {
  show(name: string) {
    return `${name}`;
  }
}

// 잘못된 경우
// class WrongChild extends Parent {
//   show() {}
// }

class Child extends Parent {
  // 메서드 override
  // 1) 부모 메서드와 반환 타입이 일치해야한다.
  // 2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
  // 3) 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안된다.
  show(name: string, me?: string): string {
    if (!me) {
      return super.show(name);
    } else {
      return super.show(name) + `${me}`;
    }
  }
}

const child = new Child();
console.log(child.show('채귤')); // 채귤
console.log(child.show('채귤', '귤채')); // 채귤귤채

// [속성 override]

class PropertyParent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// 잘못된경우
// class PropertyChild extends PropertyParent {
//   name: number;

//   constructor(name: number) {
//     this.name = name;
//   }
// }

class PropertyParent2 {
  name: string | number;

  constructor(name: string | number) {
    this.name = name;
  }
}

class PropertyChild2 extends PropertyParent2 {
  name: string;

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

const child2 = new PropertyChild2('child2');
child2.name; // name = string type
