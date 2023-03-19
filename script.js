const quoteBlock = document.querySelector('.quoteBlock');
const h2 = document.createElement('h2');

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const fullQuoteArray = data;
    const random = Math.floor(Math.random() * fullQuoteArray.length);
    console.log(random, fullQuoteArray[random])
    const randomQuoteArray = Object.values(fullQuoteArray[random]);
    h2.textContent = randomQuoteArray[0];
    quoteBlock.append(h2);
  });;