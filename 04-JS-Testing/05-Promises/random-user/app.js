// console.log("now inside app.js");

// // promise has 3 states
// // pending resolved rejected

// let samsPromise = new Promise((resolve, reject) => {

//     let a = 1 + 1;

//     if (a == 2)
//         resolve("success")
//     else
//         reject("failed")
// })

// samsPromise
//     .then((message) =>{
//         console.log(message + ' I am in the THEN')
//     })
//     .catch((message) => {
//         console.log(message + '. I am in the CATCH')
//     })

// https://randomuser.me/api/


const theText = document.querySelector("h1");
const theTextByClass = document.querySelector('.title');

console.log(document.querySelector("h1"));
console.log(theText);
console.log(theTextByClass);

const getRndUser = () => {
fetch('https://randomuser.me/api/')
    .then(res => res.json()) //convert response into json / json method returns a response
        .then(json => 
            theText.innerHTML = json.results[0].name.first)
        .catch(err => 
            console.log(err))
}

getRndUser();