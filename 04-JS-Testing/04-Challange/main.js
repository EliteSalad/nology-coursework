// const aDate = new Date("02/16/2021");

// const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
//   const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
//   console.log(fullName);

//   const bday = new Date(birthday);
//   const diff = aDate.getTime() - bday.getTime();

//   let ms = 1000 * 3600 * 24;

//   const result = diff / ms;
//   console.log(result);

//   let myArray = [];
//   arrayName.forEach((item) => {
//     if (item.includes("Tech")) {
//       return myArray.push(item);
//     } else {
//       console.log("nope not tech");
//     }
//   });
// };

// const test = doesLotsOfThings("matt", "Bickell", "09/26/1993", [
//   "Tech is booming",
//   "Covid 19 yada yada yada",
//   "Economy due for a resurgance!",
//   "You can retrain in tech too!"
// ]);

function JoinName(firstName, lastName) {
    const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
    return fullName;
}

function GetBirthday(birthday) {
    const aDate = new Date("02/16/2021");
    const bday = new Date(birthday);
    const diff = aDate.getTime() - bday.getTime();

    let ms = 1000 * 3600 * 24;

    const timeTillBirthday = diff / ms;
    return timeTillBirthday;
    
}

function SortTech(...unsortedList) {
    let techList = [];
    unsortedList.forEach((item) => {
      if (item.includes("Tech")) {
        return techList.push(item);
      }
    });  
    return techList;
}

console.log(JoinName("matt", "Bickell"));
console.log(GetBirthday("09/26/1993"));
console.log(SortTech([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
  ]));