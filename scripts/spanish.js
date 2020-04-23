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


  // spanish Info click event
document.querySelector("#spanish").addEventListener("click", function(){
  // Add container class
  document.querySelector("#language-container").classList.add("container")

  // Printing the contents
  document.querySelector("#language-container").innerHTML = languageContentsContainer(spanishData.name, "Spanish", printCountriesSpoken(spanishData), notablePeopleContainer(spanishData), funFactsData(spanishData, ""))
  // Translator print
  document.querySelector("#language-container").innerHTML += buildTranslatorContainer(spanishData.name.toLowerCase())
  // spanish translator
  if(event.target.id === "translate-btn-spanish"){

    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhrase = spanishData.dictionary[translate()]
    
    if (translatedPhrase !== undefined){
      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
  }
  
})

// Spanish translator click event
document.querySelector("#language-container").addEventListener("click", function(){
  if(event.target.id === "translate-btn-spanish"){

    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhrase = spanishData.dictionary[translate()]

    if (translatedPhrase !== undefined){
      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
  }
})