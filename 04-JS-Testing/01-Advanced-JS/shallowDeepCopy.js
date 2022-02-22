

const simpleArray = [1,2,3];
const simpleObject = {key: "value"};
// Shallow
// = operator
// copies memory address reference
const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;
//  Deep 
// spread operator -> ...
//  takes values and creats new instance 
const deepArrayCopy = [...simpleArray];
const deepObjectCopy = {...simpleObject};

//  Original array / object edit 
simpleArray.push(4)
simpleObject.newKey = "new value";

//  Display
console.log("Shallow copy");
console.log(shallowArrayCopy);
console.log(shallowObjectCopy);
console.log("Spread copy");
console.log(deepArrayCopy);
console.log(deepObjectCopy);

//  Nested
const complexArray = [[1], [2], [3]];
const complexObject = {data: {key: "value"}};

const complexArrayCopy = [...complexArray];
const complexObjectCopy = {...complexObject};

const complexArrayClone = complexArray.map(array => [...array]);
const complexObjectClone = {...complexObject, data : {...complexObject.data}};

complexArray[0].push(2);
complexObject.data.newKey = "newValue";

console.log("Spread copy");
console.log(complexArrayCopy);
console.log(complexObjectCopy);

console.log("Cloned set");
console.log(complexArrayClone);
console.log(complexObjectClone);


//JSON

const jsonObject = JSON.stringify(complexObject);   //turn all parts into string
const parsedJson = JSON.parse(jsonObject);

console.log("JSON");
console.log(jsonObject);
console.log(parsedJson);

