// [Object]

const person = {
  name: '채귤',
  age: 26,
};

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

const iPerson: IPerson = {
  name: '채귤',
  age: 26,
};

const tPerson: TPerson = {
  name: '채귤',
  age: 26,
};

iPerson.name;
tPerson.age;

// [Property Check : 초과 속성 검사]
// 객체 리터럴을 직접 입력할 때 유효하다.

type TName = {
  name: string;
};

type TAge = {
  age: number;
};

const chaegyul = {
  name: '채귤',
  age: 26,
};

const testName: TName = chaegyul;
const testAge: TAge = chaegyul;

// [Nested Object]
// 객체를 내장해서 표현하는 것과 내장된 객체를 나눠서 표현하는 것은 다른 에러를 나타냄
// 내장된 객체를 나눠서 표현했을 때 에러를 알아보기 쉬움
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const chaegyul2: NestedPerson = {
  identity: {
    name: 'chaegyul2',
    age: 26,
  },
  nationality: '한국',
};

type TPerson2 = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const chae: TPerson2 = {
  identity: {
    name: 'chae',
    age: 26,
  },
  nationality: '한국',
};

// [Optional and Undefined Property]
// Optional로 정의된 타입이 아닌경우 Property 타입을 직접 입력해야한다.
interface Dog {
  name: string;
  age: number;
  breed?: string;
}

const dog1: Dog = {
  name: '킹독',
  age: 1,
  breed: '골든리트리버', // string | undefined type
};

const dog2: Dog = {
  name: '킹도그',
  age: 2,
};

interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

const cat1: Cat = {
  name: '킹캣',
  age: 9,
  breed: undefined,
};

// [Object Union]

// 유추된 객체 타입 유니언
const dogOrCat =
  Math.random() > 0.5
    ? {
        name: '킹독',
        age: 1,
      }
    : {
        name: '킹캣',
        breed: '앙고라',
      };

// dog의 breed 타입, cat의 age 타입이 undefined 타입으로 유추됨
dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

interface Dog2 {
  name: string;
  age: number;
}

interface Cat2 {
  name: string;
  breed: string;
}

type DogOrCat = Dog2 | Cat2;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? {
        name: '킹독',
        age: 1,
      }
    : {
        name: '킹캣',
        breed: '앙고라',
      };

// dog의 breed 타입, cat의 age 타입이 undefined 타입으로 유추 X
// 없는 타입을 지정하려 했을 때 에러를 나타냄
dogOrCat2.name; // DogOrCat type
// dogOrCat2.age;
// dogOrCat2.breed;

if ('age' in dogOrCat2) {
  dogOrCat2; // Dog2 type
  dogOrCat2.age; // Dog2 type
  dogOrCat2.name; // Dog2 type
  //   dogOrCat2.breed;  type error
} else {
  dogOrCat2; // Cat2 type
  dogOrCat2.name; // Cat2 type
  dogOrCat2.breed; // Cat2 type
  //   dogOrCat2.age;  type error
}

// [Object Intersection]
type PrimitiveIntersection = string & number;

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

const gyul: PersonAndCompany = {
  name: '채귤',
  age: 26,
  company: 'gyul company',
  companyRegistrationNumber: 'xaax1',
};

type PetType = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

// PersonType은 고정으로, CompanyType 과 PetType은 선택
const companyOrPet: CompanyOrPet = {
  // PersonType
  name: '채귤',
  age: 26,

  // CompanyType
  company: '귤 컴퍼니',
  companyRegistrationNumber: 'x1',

  // PetType
  petName: '킹캣',
  petAge: 3,
};

// [Key Value Mapping]

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus['getUser'];
  paginateUsers: GlobalApiStatus['paginateUsers'];
  banUser: GlobalApiStatus['banUser'];
};

type UserApiStatus3 = {
  [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
};

type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  'getUser' | 'banUser' | 'paginateUsers'
>;

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

// [Key Value Mapping] - keyof

const key: AllKeys = 'getUser';

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus3 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
};

//
interface LoadingStatus {
  type: 'loading';
  data: string[];
}

interface ErrorStatus {
  type: 'error';
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type']; // 'loading' | 'error' type
