const spanishData = {
    name: "Spanish",
    notablePeople: [
      "Antonio Banderas",
      "John Cena",
      "Enrique Iglesias",
      "Rita Moreno",
      "Penelope Cruz"
    ],
    funFacts: {
      relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
      lettersInAlphabet: 27,
      numberOfSpeakers: "more than 437 million"
    },
    countriesSpoken: [
      "Argentina",
      "Bolivia",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Dominican Republic",
      "Equador",
      "El Salvador",
      "Equatorial Guinea",
      "Guetemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Mali",
      "Monaco",
      "Paraguay",
      "Peru",
      "Puerto Rico",
      "Spain",
      "Uruguay",
      "Venezuela"
    ],
    dictionary: {
      hello: "Hola",
      goodbye: "Adiós",
      thankYou: "Gracias",
      goodEvening: "Buena noches",
      howAreYou: "¿cómo estás?",
      whatsYourName: "cuál es tu nombre?"
    }
  };
//constant and function to click the spanish button on the navigation bar.
  const spanishButton = document.querySelector("#spanish")
  spanishButton.addEventListener("click", function(){
  // console.log("you clicked the spanish button")
  document.querySelector("#language-container").innerHTML = h1(spanishData.name, "spanish-heading")
  document.querySelector("#language-container").innerHTML += printCountriesSpoken(spanishData)
  })

  // document.querySelector("#language-container").innerHTML = `<div class="container">
  // <div class="row">
  // <div class="col-sm">
  // <h3>Countries Spoken</h3>
  // <p>${spanishData.countriesSpoken.length}</p>
  // </div>
  // </div>
  // </div>`

// const createCountriesSpokenComponent = (spanishData.countriesSpoken[i])
// return `<div class="container">
// <div class="row">
// <div class="col-sm">
// <h3>Countries Spoken</h3>
// <p>${spanishData.countriesSpoken.length}</p>
// </div>
// </div>
// </div>`

//just trying to get countriesSpoken to print to dom
//   const contriesSpokenContainer =document.querySelector("#language-container")

// for (let i=0; i < spanishData.countriesSpoken.length; i++){
//   const countriesSpoken = spanishData.countriesSpoken[i]
//   contriesSpokenContainer.innerHTML += `<li>${spanishData.countriesSpoken[i]}</li>`
// }
  




// return `
/* <div class="container">
<div class="row">
<div class="col-sm">
<h3>Countries Spoken</h3>
<p>${countriesSpoken.length}</p>
</div>
</div>
</div>` */