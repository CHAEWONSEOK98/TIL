// Required Type - 모두 필수로 만드는 타입

interface Person {
  name: string;
  age?: number;
  country: string;
}

const requiredPerson: Required<Person> = {
  name: '채귤',
  age: 26,
  country: '한국',
};
