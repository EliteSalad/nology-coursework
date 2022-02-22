class Book {
    constructor(title, author, genre, year){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }

    getSummary(){
        return `${this.title} is writtend by ${this.author}. the genre is ${this.genre} and it was published in ${this.year}`;
    }
}

const book1 = new Book("Harry potter and the hald-blood prince", "J. K. Rowling", "Fiction", 2009);
console.log(book1);

class Magazine extends Book{
    constructor(title, author, genre, year, length){
        super(title, author, genre, year)
        this.length = length;
    }
}

const mag1 = new Magazine("Mag One", "Xavier Olvier", "Tech", 2022, 1000);
console.log(mag1.author);
console.log(mag1.getSummary());


class Employee{
    constructor(name, rating, grade, nextGrade)
    {
        this.name = name, 
        this.rating = rating, 
        this.grde = grade,
        this.nextGrade = nextGrade
    }

    PromotionChance(){
        return (this.rating > 7 ? "likely" : "unlikely");
    }


}

let sam = new Employee("sam", 6, 'D', 'C');
console.log(sam.PromotionChance());

class vehical{
    constructor(wheels, steeringWheel, passengers, hp, weight)
    {
        this.wheels = wheels, 
        this.steeringWheel = steeringWheel, 
        this.passengers = passengers,
        this.hp = hp
        this.weight = weight
    }

    Speed(){
        return hp / this.weight
    }
}

class car extends vehical{
    constructor(wheels, steeringWheel, passengers, hp, weight, doors, wheelDrive, transmission){
    super(wheels, steeringWheel, passengers, hp, weight)
    this.doors = doors;
    this.wheelDrive = wheelDrive;
    this.transmission = transmission;
    }
    

    FamilySafety()
    {if(this.doors > 4) return "verySafe";
    if(this.doors > 2) return "okay";
    if(this.doors < 2) return "bad"; }
}

class bmw extends car{
    constructor(wheels, steeringWheel, passengers, hp, weight, doors, wheelDrive, transmission, tier){
        super(wheels, steeringWheel, passengers, hp, weight, doors, wheelDrive, transmission)
        this.tier = tier;

    }

    TierRating()
    {
        return "you made it"
    }

    Speed(){
        return hp * 2 / this.weight 
    }

}