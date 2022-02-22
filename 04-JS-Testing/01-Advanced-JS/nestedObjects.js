//information object inside a user object

const userOne = {
    id: "asljhfasv123sdbsdb",
    loggedIn: true,
    information: {
        firstName: "rena",
        lastName: "kerimova",
        age: 30
    },
    contact: {
        email: "rena@kerimova.co.uk",
        contactNumber: "07813577282",
        address:{
            houseNumber: 12,
            nameOfRoad: "electric avenue",
            postcode: "bn2 5nx",
            country: "uk"
            
        }
    },
    likes: ["cycling", "disco", "codding"]
}

const userTwo = {
    id: "asljhfasv123sdbsdb",
    loggedIn: true,
    information: {
        firstName: "rena",
        lastName: "kerimova",
        age: 30
    },
    contact: {
        email: "rena@kerimova.co.uk",
        contactNumber: "07813577282",
        address:{
            houseNumber: 12,
            nameOfRoad: "electric avenue",
            postcode: "bn2 5nx",
            country: "uk"
            
        }
    },
    likes: ["cycling", "disco", "codding"]
}

const userArray = [userOne, userTwo];

userArray.forEach(element => {
    console.log(element.contact.address);
    
});
// console.log(user.contact.contactNumber);
// console.log(user.contact);
// console.log(user.contact.address)
// console.log(user.likes[2]);


