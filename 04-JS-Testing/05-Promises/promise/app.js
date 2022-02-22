console.log("now inside app.js");

// promise has 3 states
// pending resolved rejected

let samsPromise = new Promise((resolve, reject) => {

    let a = 1 + 1;

    if (a == 2)
        resolve("success")
    else
        reject("failed")
})

samsPromise
    .then((message) =>{
        console.log(message + ' I am in the THEN')
    })
    .catch((message) => {
        console.log(message + '. I am in the CATCH')
    })