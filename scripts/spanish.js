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
  // const spanishButton = document.querySelector("#spanish")
  // spanishButton.addEventListener("click", function(){
  // // console.log("you clicked the spanish button")
  // document.querySelector("#language-container").innerHTML = h1(spanishData.name, "spanish-heading")
  // document.querySelector("#language-container").innerHTML += printCountriesSpoken(spanishData)
  // })

// Spanish click event
document.querySelector("#spanish").addEventListener("click", function(){
  // Printing the contents
  document.querySelector("#language-container").innerHTML = languageContentsContainer(spanishData.name, "Spanish", printCountriesSpoken(spanishData), notablePeopleContainer(spanishData), funFactsData(spanishData))

})
