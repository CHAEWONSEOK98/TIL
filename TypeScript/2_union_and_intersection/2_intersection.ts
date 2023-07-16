// Intersection : and, 교집합

// Object
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: '채귤',
  age: 26,
  phone: '01012345678',
  address: '서울',
};

// Primitive
type NumberAndString = number & string; // never : 존재할 수 없는 상황
