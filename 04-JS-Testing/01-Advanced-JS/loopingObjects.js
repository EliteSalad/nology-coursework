const validMessage = {
    userName : "Xavier",
    content : "Have a great day",

};
const invalidMessage = {
    error: 234234,
    userName : "Xavier",
    content : 9,


};



// for (let key in validMessage) {
//     console.log(key);
//     console.log(validMessage[key]);
// };

// for (let key in invalidMessage) {
//     console.log(key);
//     console.log(invalidMessage[key]);
// };

const ValidateMessaheObject = (messageObject) =>{
    for(const key in messageObject){
        const typeCheck = typeof messageObject[key] !== "string";
        if (typeCheck)
        return false;
    }
    return true;
}

console.log(ValidateMessaheObject(validMessage));       //true
console.log(ValidateMessaheObject(invalidMessage));     //false

const validMessageValues = Object.values(validMessage);
const invalidMessageValues = Object.values(invalidMessage);

console.log(validMessageValues);
console.log(invalidMessageValues);

console.log(validMessageValues.every(validMessage => {          //.every is the for each of objects
    const typeCheck = typeof validMessage === "string"
    return typeCheck
})
);

// console.log(validMessageValues.forEach(validMessage => {
//     const typeCheck = typeof validMessage === "string"
//     return typeCheck
    
// }));

// Write a function that will check the keys of a message object
// Valid keys -> ["userName", "content"]

// const validateMessageKeys = (messageObject => {
//     //GET THE KEYS
//     const objectKeys = Object.keys(messageObject);
//     //Check if valid
//     //checking this way means objects with less keys or missordered keys will still return true
//     //but will return false if an unkown key enters the mix 
//     const keyCheck = objectKeys.every(key => {
//         const validKeys = ["userName", "content", "error"]; 
//         return validKeys.includes(key);
//     });
//     //return check
//     return keyCheck;
// });

// console.log(validateMessageKeys(validMessage));
// console.log(validateMessageKeys(invalidMessage));

const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);   //entries comes out in key value pairs [(key, value) (key, value)...]

console.log(validMessageEntries);
console.log(invalidMessageEntries);


const validateMessageObjectAgain = (messageObject) => {
    const objectEntries = Object.entries(messageObject);

    const validation = objectEntries.every((entry) => {
        const key = entry[0];
        const value = entry[1];

        const typeCheck = typeof value === "string";
        const validKeys = ["userName", "content"]; 
        const keyCheck = validKeys.includes(key);

        return typeCheck && keyCheck;
    });

    return validation;
};

console.log(validateMessageObjectAgain(validMessage));
console.log(validateMessageObjectAgain(invalidMessage));
