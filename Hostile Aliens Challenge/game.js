//It is time to put what you have been learning to the test here is your advanced JavaScript
//based project brief!
//You’re challenge is to build a simple game loosely based on Space Invaders using the skills
//learnt from this module. For best results, approach this challenge with an OOP mindset
//although some functions may be needed.
//Create a simple text only game with a single button that hits a random alien ship in the fleet.
//Each time the button is pressed, a random alien ship is hit and its hit points are reduced.
//Once an alien ships points have hit zero the ship is destroyed and can’t be hit again. The
//game is over once all alien ships have been destroyed.

// Rules
// • You should be able to start a new game once the game is over
// • Some text visualisation of the ships and their hit points
// • The game should have the following Alien ships:
// o 1 x Mother ship-
// ▪ 100 Hit Points -
// ▪ Loses 9 hit points every time it is hit -
// ▪ All ships are destroyed if the Mother ship is destroyed
// o 5 x Defence ship -
// ▪ Each one starts with 80 hit points -
// ▪ Each one Loses 10 hit points each time it is hit
// o 8 x Attack ship
// ▪ Each starts with 45 hit points
// ▪ Each loses 12 hit points each time it is hit. 

let playerName =''
let inGame = true;
let setup = true;

while (inGame) {
    //playerName = console.readline//("Enter string : ");
    console.log(`input is ${playerName}`)
}
//reset game
// enum healthStatus {
// 	VALUE1, VALUE2, VALUE3
// }

class Ship {

    constructor(names, maxHealth, damageTake) {
        this.names=names;
        this.maxHealth = maxHealth;
        this.damageTake = damageTake;
        this.currentHealth = health;
        this.healthPercentage = 100;
        this.healthStatus = "healthy"
    }

    TakeDamage() { 
        this.currentHealth -= this.damageTake;
        healthPercentage = (this.currentHealth/this.maxHealth) * 100
     }

    Status() {
        if(this.healthPercentage < 100)
        this.healthStatus = "lightly damaged"
        else if(this.healthPercentage < 75)
        this.healthStatus = "moderately damaged"
        else if(this.healthPercentage < 50)
        this.healthStatus = "heavily damaged"
        else if(this.healthPercentage < 25)
        this.healthStatus = "near death"
    } 
    method_3() { 

    }
  }

//   class Game {
//       constructor(motherShips, defenceShips, attackShips)
//       {
//           this.motherShips = motherShips;
//           this.defenceShips = defenceShips;
//           this.attackShips = attackShips;
//       }

//       SpawnShips()
//   }