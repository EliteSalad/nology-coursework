// // //OBJECT SYNTAX

// // const exampleObject = {
// //     key : "value",  //comma needed
// //     types : "any",
// //     method(){
// //         //DO SOMETHING
// //         //this.key
// //         //returns something
// //         return this.key + " " + this.types;
// //    }
// // }

// // //ACCESS OBJECTS

// // // DOT NOTATION
// // console.log(exampleObject.key)
// // console.log(exampleObject.types)

// // // CALLING A METHOD
// // console.log(exampleObject.method())

// // // SQUARE BRACKETS
// // console.log(exampleObject["key"]);
// // console.log(exampleObject["types"]);

// // exampleObject.key = "test";
// // exampleObject.newkey = "new value";

// // console.log(exampleObject);

// const studentContainer = document.querySelector(".students-container");



// const person = { 
//     firstName: "Xavier",
//     lastName: "Oliver",
//     quote: "idk something long enough to fill this up",
//     skills: ["jumping", "falling", "eating"],
//     imgUrl: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//     GetSkills(){
//         let counter = 0
//         skills.forEach(skill => {
//             return skill[counter]
//             counter++
//         })
//     },
//     // skills map to a const with li tags ready for an html list
//     GetSkillsHTML(){
//         const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`);
//         console.log(skillsHTML);
//         return skillsHTML.join("\n"); //turns into one string
//     },
//     GetFullName(){
//         //return this.firstName + " " + this.lastName;
//         return `${this.firstName} ${this.lastName}`;
//     },
//     GetPersonalHTML(){
//         const personalHTML = `
//         <article class = "student-card">
//             <img src=${this.imgUrl} />
//             <h2>${this.GetFullName()}</h2>
//             <blockquote>${this.quote}</blockquote>
//             <h3>Skills</h3>
//             <ul>${this.GetSkillsHTML()}</ul>
//         </article>
//         `;
//         return personalHTML;
//     }

// }

// person.age = 25;
// console.log(person.GetSkillsHTML());

// //studentContainer.style.border = "50px solid red";


// for (let index = 0; index < 10; index++) {
//     studentContainer.innerHTML += person.GetPersonalHTML();
// }


// //add method onto the person object thata returns the same html


// // console.log(person);
// // console.log(person.firstName + " " + person.lastName);

// // console.log(person.GetFullName());


//CLASS SYNTAX

// PASCALCASE -> FOR CLASSES
class ExampleClass{
    constructor(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    Greet(){
        return `hi my name is ${this.firstName} ${this.lastName}`;
    }
}

//Inhertiance syntax
class ExtendedClass extends ExampleClass{
    constructor(firstName, lastName, age, date, height){
        super(firstName, lastName, age)
        this.date = date,
        this.height = height
    }
}


const exampleOne = new ExampleClass("Salad", "Cream", 30);
const exampleTwo = new ExampleClass("Catch", "Up", 19);
console.log(exampleOne.Greet(), exampleTwo.Greet());

///////////////////////////////////////////////////////////////////////////////////////////////////////////
class Profile{
    constructor(firstName, lastName, quote, skills, imgUrl){
        this.firstName = firstName,
        this.lastName = lastName,
        this.quote = quote,
        this.skills = skills,
        this.imgUrl = imgUrl
    }

    GetSkills(){
                 let counter = 0
                skills.forEach(skill => {
                     return skill[counter]
                    counter++
                 })
             }
             // skills map to a const with li tags ready for an html list
             GetSkillsHTML(){
                 const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`);
                console.log(skillsHTML);
                 return skillsHTML.join("\n"); //turns into one string
             }
             GetFullName(){
                 //return this.firstName + " " + this.lastName;
                 return `${this.firstName} ${this.lastName}`;
             }
             GetProfileHTML(){
                 const profileHTML = `
                 <article class = "student-card">
                     <img src=${this.imgUrl} />
                     <h2>${this.GetFullName()}</h2>
                     <blockquote>${this.quote}</blockquote>
                     <h3>Skills</h3>
                     <ul>${this.GetSkillsHTML()}</ul>
                 </article>
                 `;
                 return profileHTML;
             }
}

class PremiumProfile extends Profile{
constructor(firstName, lastName, quote, skills, imgUrl, contactLink){
    super(firstName, lastName, quote, skills, imgUrl),
    this.contactLink = contactLink;
}

GetProfileHTML(){
    const profileHTML = `
    <article class = "student-card">
        <img src=${this.imgUrl} />
        <h2>${this.GetFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.GetSkillsHTML()}</ul>
        <a href=${this.contactLink}>Contact Me</a>
    </article>
    `;
    return profileHTML;
}



}

const xavier = new PremiumProfile(
"Xavier", 
"Oliver", 
"idk something long enough to fill this up", 
["jumping", "falling", "eating"],
"https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
"https://www.google.com")

const bob = new Profile(
    "Bob", 
    "Oliver", 
    "idk something long enough to fill this up", 
    ["jumping", "falling", "eating"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png");

    const tom = new Profile(
        "Tom", 
        "Oliver", 
        "idk something long enough to fill this up", 
        ["jumping", "falling", "eating"],
        "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png");

console.log(xavier);

const studentContainer = document.querySelector(".students-container");
studentContainer.innerHTML += xavier.GetProfileHTML();
studentContainer.innerHTML += bob.GetProfileHTML();
studentContainer.innerHTML += tom.GetProfileHTML();