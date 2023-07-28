// Import

import { PersonModel, person, FlowerModel, flower } from './2_export_1';

const personModel = new PersonModel('사람', 26);

const flowerModel = new FlowerModel('안개꽃');

console.log(personModel); // PersonModel { name: '사람', age: 26 }
console.log(person); // PersonModel { name: '채귤', age: 26 }
console.log(flowerModel); // FlowerModel { name: '안개꽃' }
console.log(flower); // FlowerModel { name: '장미' }
