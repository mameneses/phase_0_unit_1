// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
    Define  variable adam and make equal to an empty object literal
2. Give adam a name property with the value "Adam".
    Set a name: "Adam" within the the empty object literal of variable adam.
3. Add a spouse property to terah and assign it the value of adam.
    Set terah add "spouse" property and make it = the value adam
4. Change the value of the terah weight property to 125.
    Set terah property of weight = to 125.
5. Remove the eyeColor property from terah.
    delete terah property of eyeColor
6. Add a spouse property to adam and assign it the value of terah.
    set adam property of spouse = to terah.
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
    set terah and add property children = an empty object in object literal notation.
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
    In terah property of children set a property of carson and within carson set a name property : to "Carson"
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
    In terah property of children set a property of carter and within carson set a name property : to "Carter"
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    In terah property of children set a property of colton and within carson set a name property : to "Colton"
11. Add a children property to adam and assign it the value of terah children.
    Add variable adam with property of children and set = variable tarah with property of children.

*/

// __________________________________________
// Write your code below.

var adam = {
  name: "Adam"
};

terah.spouse = adam;

terah.weight = 125;

delete terah.eyeColor;

adam.spouse = terah;

terah.children = {
  carson: {
    name: "Carson"
  },
  carter: {
    name: "Carter"
  },
  colton: {
    name: "Colton"
  },
};

adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines
// The strategy of having set tasks to be complete via code was very effective and helpful in 
// understanding js objects. I ran into issues when it came to what code was to be used 
// and what code was to be left as is, luckily the google+ group board  helped to answer those questions. I had some
// questions about syntax of certain operation, such as removing a property from an object, which 
// stackoverflow.com was helpful answering. I learned many new things, mainly about JS objects
// and manipulating JS objects. This has greatly increased my confidence level but i still feel
// that more learnings is needed to master this. I really enjoyed creating the code from the
// the questions. I did not enjoy the tedious psuedo code.
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
