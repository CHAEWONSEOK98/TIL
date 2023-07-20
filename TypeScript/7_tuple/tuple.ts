// Tuple

let seasons: string[] = ['봄', '여름', '가을', '겨울'];

let numberAndStringTuple: [number, string] = [26, '채귤'];

numberAndStringTuple.push(3);
console.log(numberAndStringTuple); // [26, '채귤', 3]

let unmodifiableTuple: readonly [number, string] = [26, '채귤'];
// unmodifiableTuple.push(); // X

// Tuple 유추하기
let seasons2 = ['봄', '여름', '가을']; // string[] type
let seasonsTuple = ['봄', '여름', '가을'] as const; // readonly type

let stringArray: string[] = [...seasonsTuple];

// Named Tuple
const namedTuple: [name: string, age: number] = ['채귤', 26];

// Assigning Tuple to Tuple
// Tuple은 같은 타입끼리만 할당가능
const tuple1: [string, string] = ['봄', '여름'];
const tuple2: [number, number] = [1, 2];

// const tuple3: [boolean, boolean] = tuple1; // X
// const tuple4: [number, number, number] = tuple2; // X

// Tuple과 Array의 관계

let season: [string, string] = ['봄', '여름'];

let stringArr: string[] = season; // o

let season3: [string, string] = stringArr; // x
