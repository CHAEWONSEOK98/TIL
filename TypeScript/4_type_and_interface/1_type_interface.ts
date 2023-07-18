// Type vs Interface

// Object 선언
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function 선언
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

// Type에서는 할 수 있지만, Interface에서는 할 수 없는 것

// 1) primitive 타입 선언
type Name = string;

// 2) union 타입 선언
type UnionType = string | number;

// 3) primitive list 또는 tuple 타입 선언
type TupleType = [number, string];

// Interface에서는 할 수 있지만, Type에서는 할 수 없는 것

// 1) interface merging
interface Rectangle {
  height: number;
}

interface Rectangle {
  width: number;
}

let rectangle: Rectangle = {
  height: 200,
  width: 100,
};

// Interface Merging
class Review {
  // 프로퍼티
  getY = (x: number) => {
    return x;
  };

  // 메서드
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  //   getY: (y: string) => number; // x
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number; // o
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};
