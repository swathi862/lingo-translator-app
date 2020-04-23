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


const frenchButton = document.querySelector("#french")
frenchButton.addEventListener("click", function(){
    document.querySelector("#language-container").innerHTML = h1(frenchData.name, "french-heading")
    document.querySelector("#language-container").innerHTML += printCountriesSpoken(frenchData)
    document.querySelector("#language-container").innerHTML += funFactsData(frenchData)
    document.querySelector("#language-container").innerHTML += buildTranslatorContainer(frenchData.name.toLowerCase())
})

document.querySelector("#language-container").addEventListener("click", function(){
  if(event.target.id === "translate-btn-french"){

    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhrase = frenchData.dictionary[translate()]
    
    if (translatedPhrase !== undefined){
      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
  }
})





