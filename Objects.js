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
/*const objectA = {
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
console.log(result); */

/*const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water / this.flour) * 100
  }
};

console.log(loaf);

console.log(loaf.hydration()); */

/* const myObj = {
  foo: 'ice',
  bar: 'mice',
  fum: 'dice',
  quux: 'rice',
  spam: 'spice'
}

function loopMyObj(argument) {
  for (let key in argument) {
    console.log(`${key}: ${argument[key]}`);
  }
}
loopMyObj(myObj); */

/*
const food = {
  meals: ['breakfast', 'second breakfast','elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(food.meals[3]); */

/* const objOne = {
  name: 'Sherlock',
  jobTitle: 'Detective'
}

const objTwo = {
  name: 'House',
  jobTitle: 'Doctor'
}

const objThree = {
  name: 'Cuddy',
  jobTitle: 'Medical Director'
}

let jobArray = [objOne, objTwo, objThree]

function displayJobArray(ary) {
  ary.forEach(element => console.log(element))
}
displayJobArray(jobArray); */

// const objOne = {
//   name: 'Sherlock',
//   jobTitle: 'Detective',
//   boss: 'Cuddy'
// }

// const objTwo = {
//   name: 'House',
//   jobTitle: 'Doctor',
//   boss: 'Cuddy'
// }

// const objThree = {
//   name: 'Cuddy',
//   jobTitle: 'Medical Director'
// }

// let jobArray = [objOne, objTwo, objThree]

// function boss(jobs) {
//   for (let i = 0; i < jobs.length; i ++) {
//     if (jobs[i].boss === undefined) {
//       console.log(`${jobs[i].jobTitle} ${jobs[i].name} doesn't report to anybody`)}
//     else  {
//       console.log(`${jobs[i].jobTitle} ${jobs[i].name} reports to ${jobs[i].boss}`)}
    
//   }
// }
// boss(jobArray);

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decodeWords(words, object) {
  let newArray = [];
  newArray.push(words.split(' '));
  for (let key in object) {
    if (Object.keys(object) === newArray.charAt[0]) {
      return newArray.charAt[object[key]];
    }
  }
  return newArray;
}
let sampleString = 'craft block argon meter bells brown croon droop';
let result = decodeWords(sampleString, cipher);
console.log(result);

//'craft block argon meter bells brown croon droop'.