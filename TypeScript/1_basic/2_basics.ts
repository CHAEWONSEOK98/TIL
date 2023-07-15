// Types

// JS에 존재하는 7개의 타입
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

// TS에만 존재하는 타입

// any - 아무 타입이나 입력 할 수 있는 타입
let anyVar: any;
anyVar = 100;
anyVar = '채귤';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = '채귤';
unknownType = true;

// let testNumber2: number = unknownType;
// let testNumber2: string = unknownType;
// let testNumber2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// any, unknown type은 모든 type을 해당 변수에 입력할 수 있지만 다른 변수에 할당할 때 차이
// unknown, any type에 할당하는 경우 아니면 다른 타입의 변수에 할당하는 것은 불가능

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
let neverType: never = null;
let neverType: never = undefined;
let neverType: never = 'test';

// list
const season: string[] = ['spring', 'summer', 'fall', 'winter'];
const booleanList: boolean[] = [true, true, false, false];
