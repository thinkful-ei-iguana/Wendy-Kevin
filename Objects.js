'use strict';
/*function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'Hello';
    }
  };
}

console.log(createMyObject()); */

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }

// const test = {
//   name: 'practice'
// };

// console.log(updateObject(test));

// function personMaker() {
//   return {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
// };
// console.log(personMaker().fullName());

//deleting keys
// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };
// const result = keyDeleter(sampleObj);
// console.log(result);

/* function makeStudentsReport(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(`${data[i].name}: ${data[i].grade}`);
  }
  return result;
}

let test = [{name: 'Johnny Robot', grade: 'C'}];

console.log(makeStudentsReport(test)); */

// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];

// function enrollInSummerSchool(students) {
//   let result = students.map(student => {
//     student.name = student.name;
//     student.course = student.course;
//     student.status = 'In Summer School'
//   });
//  return result;
// }
  
// console.log(enrollInSummerSchool(studentData));//

// function reenrollInSummerSchool(students) {
//   let answer = [];
//   for (let i = 0; i < students.length; i++) {
//     answer.push({
//       name: students[i].name,
//       course: students[i].course,
//       status: 'In Summer School'
//     });
//   }
//   return answer;
// };
// const result = reenrollInSummerSchool(studentData);
// console.log(result);

//find by id
// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' },
// ];

// function findById(items, idNum) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].id === idNum) {
//       return items[i];
//     }
//   }
// }
// let result = findById(scratchData, 28);
// console.log(result);

//validate keys
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  const keys = Object.keys(object);
  if (keys.length !== expectedKeys.length) {
    return false;
  }
  const value = keys.every(items => expectedKeys.includes(items));
  return value;
}

let result = validateKeys(objectA, expectedKeys);
console.log(result);