// Partial Type

interface Person {
  name: string;
  age: number;
  country: string;
}

const chaeGyul: Person = {
  name: '채귤',
  age: 26,
  country: '한국',
};

function updatePerson(original: Person, updates: Partial<Person>): Person {
  return {
    ...original,
    ...updates,
  };
}

console.log(updatePerson(chaeGyul, { age: 27 })); // { name: '채귤', age: 27, country: '한국' }
console.log(updatePerson(chaeGyul, { age: 27, name: '귤' })); // { name: '귤', age: 27, country: '한국' }
