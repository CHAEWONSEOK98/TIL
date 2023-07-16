// Casting
// Casting에서 가장 중요한 것 : 타입스크립트는 자바스크립트로 컴파일 되는 언어
// 타입스크립트에서 Casting을 하면 자바스크립트에서는 적용이 안된다.
// Casting은 자바스크립트에서는 존재하지않는 기능
// Casting시 실제로 그 타입이 아니더라도 그 타입이라고 가정하게 할 수 있다.

let chaegyul = 'chaegyul';
console.log(chaegyul.toUpperCase());

let testNumber = 3;
// console.log(testNumber.toUpperCase()); // x

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); // x
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number

//

let number = 5;
console.log(number.toUpperCase()); // x
console.log((number as any).toUpperCase()); // o

//any 타입으로 casting시 당연히 작동되면 안되는 기능도 작동하는 경우가 생김
