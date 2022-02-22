const fruitObjectArray = [
    {fruit:"apple"},
    {fruit: "bananana"},
    {fruit: "orange"}
    // {animal: "dragon"},
    // {plate: "round"}
];

console.log(fruitObjectArray[0].fruit);
console.log(fruitObjectArray[1].fruit);
console.log(fruitObjectArray[2].fruit);
// console.log(fruitObjectArray[3].fruit); //undefined as no fruit at array 3 
// console.log(fruitObjectArray[0].animal);//undefined as animal is at position 3    
// console.log(fruitObjectArray[3].animal);

const fruitValueArray = fruitObjectArray.map((fruitObject) =>{
const fruitValue = fruitObject.fruit;
return fruitValue;  //returns single element of the array at a time
})

console.log(fruitValueArray) 

const searchTerm = "e";
const searchResults = fruitObjectArray.filter((fruitObject) => {
    const fruitMatch = fruitObject.fruit.includes(searchTerm);
    return fruitMatch;
});

console.log(searchResults);

//Create a function that takes an array of fruit
//-> map over the array and generate some <li>fruitName</li>
// -> turn array into string
//Return a string

const ObjectArrayToList = (objectArray) =>{
    const listArray = objectArray.map(eachobject => {
        return `<li>${eachobject.fruit}</li>`;
    });
    let listString = listArray.join("\n");
    return listString;

}

console.log(ObjectArrayToList(fruitObjectArray));