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

class Ship {

    constructor(names, maxHealth, damageTake) {
        this.names=names;
        this.maxHealth = maxHealth;
        this.damageTake = damageTake;
        this.currentHealth = maxHealth;
        this.healthPercentage = 100;
        this.healthStatus = "healthy"
        this.alive = true;
    }
    
    CopyConstructor(ship){
        this.names=ship.names;
        this.maxHealth = ship.maxHealth;
        this.damageTake = ship.damageTake;
        this.currentHealth = ship.maxHealth;
        this.healthPercentage = 100;
        this.healthStatus = "healthy"
        this.alive = true;
    
    }
    
    TakeDamage() { 
                      //why didn't overloding this work? //  TakeDamage(amount) 
        this.ChangeHealth(this.damageTake);
     }
    
    ChangeHealth(amount)
    {
        this.currentHealth -= amount
        this.CheckHealthPercentage()
        this.CheckDeath()
    }
    
     CheckDeath()
     {
         if((this.currentHealth<=0))
         {
            this.alive = false
            this.currentHealth = 0;
        }
         else 
         this.alive = true
     }
    
    ReturnState()
    {
    
    return this.alive;
    }
    
     Reset()
     {
         ChangeHealth(!this.maxHealth) 
     }
     
    CheckHealthPercentage()
    {
        this.healthPercentage = (this.currentHealth/this.maxHealth) * 100
        this.Status();
    }
    
    Status() {
        if(this.healthPercentage >= 100)
        this.healthStatus = "healthy"
        else if(this.healthPercentage > 75)
        this.healthStatus = "lightly damaged"
        else if(this.healthPercentage > 50)
        this.healthStatus = "moderately damaged"
        else if(this.healthPercentage > 25)
        this.healthStatus = "heavily damaged"
        else if(this.healthPercentage > 0)
        this.healthStatus = "near death"
        else if(this.healthPercentage <= 0)
        this.healthStatus = "dead"
    
        console.log(`The ${this.names} is ${this.healthStatus}`);
    } 
    }
    



    
    //let ship = new Ship()[3]
        let ship1 = new Ship("Mother ship", 100, 9)
        let ship2 = new Ship("Defence ship", 80, 10)
        let ship3= new Ship("Attack ship", 45, 12)
        let fireBtn = document.getElementById("fireBtn");
        let restartBtn = document.getElementById("restartBtn");
        let fireworkCanvas = document.getElementById("canvas");
    
        let shipGraveyard = new Array()
            let shipsInGame = new Array();
    
        Setup();
    
        function Setup(){
            restartBtn.disabled =   true;
            fireBtn.disabled =   false;
            let shipGraveyard = new Array()
            let shipsInGame = new Array();
    
            HideUnhide(fireworkCanvas)
        Spawn(ship1, 1);
        Spawn(ship2, 5);
        Spawn(ship3, 8);
        }
    
    
        
    
        function Fire() {
            target = shipsInGame[getRandomInt(shipsInGame.length-1)]
            console.log(target.currentHealth)
            target.TakeDamage()
            console.log(target.currentHealth)
    
    
            console.log("fire");
            shipsInGame[getRandomInt(shipsInGame.length-1)].TakeDamage();
            RemoveTheDead()
        }
    
        function HideUnhide(element)
        {
    
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
        }
    
    function RemoveTheDead()
    {
        if(shipsInGame.length > 0)
        {
            for (let index = 0; index < shipsInGame.length; index++) {
    
                if(shipsInGame[index].healthStatus.includes("dead"))
                {console.log("this ship dead")
                shipGraveyard.push(shipsInGame[index])
                shipsInGame.splice(index,1)
                }
                else
                {
                    console.log("this ship is still alive ")
                }
    
    
                
            }
            let motherShipIsAlive = false;
            for (let index = 0; index < shipsInGame.length; index++) {
                if(shipsInGame[index].names.includes(ship1.names))
                {
                    motherShipIsAlive = true
                    console.log("mothership still alive")
                }
                else
                {                
    
                }
                }
    
                if (!motherShipIsAlive)
                {
                    fireBtn.disabled = true
                    restartBtn.disabled =   false;
                    console.log("mothership is dead")
                    shipsInGame.forEach(element => {
                        element.ChangeHealth(element.maxHealth)
                        });
                        HideUnhide(fireworkCanvas)
                }
    
        }
    
        
    
    }
    
    function copyClassships()
    {
        let temp = JSON.stringify(ship1)
        let copiedClass = temp.toString;
    }
    
    function Spawn(ships, quantity)
    {
        let orginalArrayLength = shipsInGame.length;
        console.log(orginalArrayLength)
        for (let index = 0; index < quantity; index++) {
    
            shipsInGame[index + orginalArrayLength] = new Ship("Defaut", 0,0)
            shipsInGame[index + orginalArrayLength].CopyConstructor(ships)//new Ship("Mother ship", 100, 9);
            shipsInGame[index + orginalArrayLength].names += ' ' + index.toString()
            
        }
        console.log(shipsInGame);
    }
    
    function getRandomInt(max){
    return Math.floor(Math.random() * max)
    }