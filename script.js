// Variable declarations
const quoteBlock = document.querySelector('.quoteBlock');
const pokeBlock = document.querySelector('.pokeBlock');
const figure = document.querySelector('figure');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const img = document.createElement('img');

// Pokemon image pull
function getlength(number) {
    return digitCount = number.toString().length;
    // console.log(digitCount);
}

// Quote pull
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const fullQuoteArray = data;
    const random = Math.floor(Math.random() * fullQuoteArray.length);
    const randomQuoteArray = Object.values(fullQuoteArray[random]);
    h2.textContent = randomQuoteArray[0];
    quoteBlock.append(h2);
  });;

// Pokemon pull

fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const fullPokemonArray = data;
    console.log(data);
    const random = Math.floor(Math.random() * 151);
    const randomPokemonArray = Object.values(fullPokemonArray.results[random]);
    h3.textContent = randomPokemonArray[0];
    pokeBlock.append(h3);
    console.log(random);
    getlength(random);
    if (digitCount === 1) {
        const pokeImgNumber = '00' + (random + 1);
        const imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pokeImgNumber + ".png";
        img.src = imageUrl;
        figure.append(img);
    } else if (digitCount === 2) {
        const pokeImgNumber = '0' + (random + 1);
        const imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pokeImgNumber + ".png";
        img.src = imageUrl;
        figure.append(img);
    } else {
        const pokeImgNumber = (random + 1);
        const imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pokeImgNumber + ".png";
        img.src = imageUrl;
        figure.append(img);
    }
  });;




