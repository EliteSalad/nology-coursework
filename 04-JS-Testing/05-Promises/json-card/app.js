
//https://api.punkapi.com/v2/beers/random


class BeerCard {
    constructor(name, tagline, description, abv, firstFood, img) {
      this.name = name;
      this.tagline = tagline;
      this.description = description;
      this.abv = abv;
      this.firstFood = firstFood;
      this.img = img;
    }

    setName(name){this.name = name}
    setTagline(tagline){this.tagline = tagline}
    setDescription(description){this.description = description}
    setAbv(abv){this.abv = abv}
    setFirstFood(firstFood){this.firstFood = firstFood}
    setImg(img){this.img = img}
}
let tempBeer = new BeerCard()

const theText = document.querySelector("h1");

console.log(theText);

// const getRndBeer = () =>{

//     console.log(tempBeer)
//     fetch('https://api.punkapi.com/v2/beers/random')
//         .then(res => res.json())
//             .then(json => 
//                 console.log(json[0].image_url,
//                 // theText.innerHTML = "success",
//                 tempBeer.setName(json[0].name),
//                 tempBeer.setTagline(json[0].tagline),
//                 tempBeer.setDescription(json[0].description),
//                 tempBeer.setAbv(json[0].abv),
//                 tempBeer.setFirstFood(json[0].food_pairing[0]),
//                 tempBeer.setImg(json[0].image_url),
//                 console.log(tempBeer)
//             ))
//             .catch(err => console.log(err))
//         .catch(err => console.log(err))

//         console.log(tempBeer)
// }

const MakeBeerCanCard = (beer) => {
    return `
    <div class="beer-container">
    <img src=${beer.image_url}>
    <h1>${beer.name}</h1>
    <h4>${beer.tagline}</h4>
    <p>${beer.description}</p>
    <h3>${beer.abv}%</h3>
    <p>Served best with: ${beer.food_pairing[0]}</p>
    </div>
    `
}

const getRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => res.json())
        .then(json => document.body.innerHTML += MakeBeerCanCard(json[0]))
        .catch(err => console.log(err))
    .catch((err => console.log(err)))

}

getRandomBeer();

// const MakeCard = () => {
//     console.log(tempBeer)
//     let card = document.createElement("div");
//     let img = document.createElement("img")
//     img.src = tempBeer.img; 
//     card.appendChild(img)
// }

// getRndBeer();
// MakeCard();


//display card / (div) with
// - name (h1)
// - tagline (h4)
// - description (p)
// - abv (h3)
// - first food it paris with (p)