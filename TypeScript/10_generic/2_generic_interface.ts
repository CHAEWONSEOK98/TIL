// Generic Interface

interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

const cache1: Cache<string> = {
  data: ['data1', 'data2'],
  lastUpdate: new Date(),
};

//

// Generic type 'Cache<T>' requires 1 type argument(s).
// 제네릭 자동유추 안됨.
// const cache2: Cache = {
//   data: [123, 234],
//   lastUpdate: new Date(),
// };

const cache2: Cache<number> = {
  data: [123, 234],
  lastUpdate: new Date(),
};

//

interface DefaultGeneric<T = string> {
  data: T[];
}
const cache3: DefaultGeneric = {
  data: ['123', '456'],
};
