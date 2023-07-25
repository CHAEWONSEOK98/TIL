// Return Type

type ReturnTypeSample = ReturnType<() => number>; // number type

type FunctionSign = (x: number, y: number) => number;
type ReturnType2 = ReturnType<FunctionSign>; // number type
