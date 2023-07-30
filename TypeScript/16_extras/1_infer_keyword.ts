// Infer Keyword - 추론

/*
(Inferring Type in Conditional Type)

Infer Keyword는 Conditional Type에서만 사용 가능한 키워드

extends 키워드를 사용했을 때 extend 한 대상에서 타입을 한번 더 추론하는 역할
*/

/*
1) [자주 사용되는 예제]
Flattening > Array를 벗겨낼 때
string[] > string
string[][] > string[]
*/

type Flatten<Type> = Type extends Array<string> ? string : Type;
type StringArray = Flatten<string[]>; // string type
type NumberArray = Flatten<number[]>; // number[]

//

// type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType : Type;
type Flatten2<Type> = Type extends Array<infer ElementType>
  ? ElementType
  : Type;
type StringArray2 = Flatten2<string[]>; // string type
type NumberArray2 = Flatten2<number[]>; // number type
type BooleanArray2 = Flatten2<boolean[][]>; // boolean[] type

// 2) [Return Type 추론]
type InferReturnType<Type> = Type extends (...args: any[]) => string
  ? string
  : Type;

type NumberArray3 = InferReturnType<number[]>; // number[] type
type StringFunction = InferReturnType<() => string>; // string type
type NumberFunction = InferReturnType<() => number>; // NumberFunction = () => number type

//

type InferReturnType4<Type> = Type extends (...args: any[]) => infer ElementType
  ? ElementType
  : Type;

type NumberArray4 = InferReturnType4<number[]>; // number[] type
type StringFunction4 = InferReturnType4<() => string>; // string type
type NumberFunction4 = InferReturnType4<() => number>; // number type
