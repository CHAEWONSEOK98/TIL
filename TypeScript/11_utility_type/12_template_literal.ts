// Template Literal

type TestType = 'Test Type';

// Uppercase
type TestTypeUpper = Uppercase<TestType>; // "TEST TYPE" type

// Lowercase
type TestTypeLower = Lowercase<TestTypeUpper>; // "test type" type

// Capitalize
type TestTypeCapital = Capitalize<TestTypeLower>; // "Test type" type

// Uncapitalize
type TestTypeUnCapital = Uncapitalize<TestTypeCapital>; // "test type" type
