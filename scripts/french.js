const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],
  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

// French Info click event
document.querySelector("#french").addEventListener("click", function(){
  // console.log("You clicked French")
  
  // Printing the contents
  document.querySelector("#language-container").innerHTML = languageContentsContainer(frenchData.name, "French", printCountriesSpoken(frenchData), notablePeopleContainer(frenchData), funFactsData(frenchData))
  // Translator print
  document.querySelector("#language-container").innerHTML += buildTranslatorContainer(frenchData.name.toLowerCase())
  // French translator
  if(event.target.id === "translate-btn-french"){

    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhrase = frenchData.dictionary[translate()]
    
    if (translatedPhrase !== undefined){
      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
  }
  
})

// French translator click event
document.querySelector("#language-container").addEventListener("click", function(){
  if(event.target.id === "translate-btn-french"){

    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhrase = frenchData.dictionary[translate()]

    if (translatedPhrase !== undefined){
      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
  }
})







// const frenchButton = document.querySelector("#french")
// frenchButton.addEventListener("click", function(){
//   // French Heading
//   frenchButton = h1(frenchData.name, "french-heading")
//   //French translator area
//   frenchButton += buildTranslatorContainer(frenchData.name.toLowerCase())
//   // Printer
//   frenchButton += languageContentsContainer(frenchData.name, "French", printCountriesSpoken(frenchData), notablePeopleContainer(frenchData), funFactsData(frenchData))
//   // French translator
//   if(event.target.id === "translate-btn-french"){

//     const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

//     const translatedPhrase = frenchData.dictionary[translate()]
    
//     if (translatedPhrase !== undefined){
//       document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
//     }
//   }


// })


// Navbar Home button click event
// document.querySelector(".navbar-brand").addEventListener("click", function(){
//   document.querySelector("#language-container").classList.remove("container")
//   document.querySelector("#language-container").innerHTML = splashpageContainer()
// })
