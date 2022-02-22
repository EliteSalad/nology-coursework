const fruitObjectArray = [
    {fruit:"apple", rating: 8, price:150},
    {fruit: "bananana", rating: 5, price:100},
    {fruit: "orange", rating: 6, price:120}
];

console.log(fruitObjectArray[2]);

const generateFruitHTML = (fruitArray) => {


    const html = fruitArray.map(fruitObject =>{
        const price = (fruitObject.price / 100).toFixed(2);

        const capitalised = fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1);

        const cardHtml = `
        <div>
        <h3>${capitalised}</h3>
        <p>This fruit is ${fruitObject.rating} / 10 </p>
        <p> Buy now for £${price} </p>
        </div>
        `
        return cardHtml;
    });

    return html.join("");
}

const sortedByHighestRating = fruitObjectArray.sort((a, b) => {     //suddenly stopped working
    return b.rating - a.rating;
})

const sortedByLowestRating = fruitObjectArray.sort((a, b) => {
    return a.rating - b.rating;
})


console.log(sortedByHighestRating);
console.log(sortedByLowestRating);
console.log(generateFruitHTML(sortedByHighestRating));