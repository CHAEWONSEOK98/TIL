// Extract Type - exclude Type 반대

type stringOnly = Extract<string | boolean | number, string>; // string type

type functionOnly = Extract<string | (() => void), Function>; // void type
