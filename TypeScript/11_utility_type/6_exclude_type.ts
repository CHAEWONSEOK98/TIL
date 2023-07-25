// Exclude Type - Extract Type 반대

type NoString = Exclude<string | boolean | number, string>; // number | boolean type

type NoFunction = Exclude<string | (() => void), Function>; // string type
