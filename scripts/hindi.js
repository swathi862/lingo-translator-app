
const hindiData = {
  name: "Hindi",
  notablePeople: [
    "Nelly Furtado",
    "John Cena",
    "Natalie Di Luccio",
    "Anush Stepanyan",
    "Will Smith",
    "Hugh Jackman",
    "Julia Roberts",
    "Ben Kingsley",
    "Dev Patel"

  ],
  funFacts: {
    relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
    lettersInAlphabet: 50,
    numberOfSpeakers: "about 341 million"
  },
  countriesSpoken: [
    "India",
    "Nepal",
    "Fiji",
    "Pakistan",
    "Trinidad and Tobago",
    "Singapore",
    "South Africa",
    "Mauritius",
    "Guyana",
    "Suriname"
  ],
  dictionary: {
    hello: {
      hindi: "नमस्ते",
      englishPronunciation: "namaste"
    },
    goodbye: {
      hindi: "अलविदा",
      englishPronunciation: "alavida"
    },
    thankYou: {
      hindi: "धन्यवाद",
      englishPronunciation: "dhanyavaad"

    },
    goodEvening: {
      hindi: "सुसंध्या",
      englishPronunciation: "susandhya"
    },
    howAreYou: {
      hindi: "क्या हाल है",
      englishPronunciation: "kya haal hai"
    },
    whatsYourName: {
      hindi: "तुम्हारा नाम क्या हे",
      englishPronunciation: "tumhaara naam kya he"
    }
  }}
  

  // Hindi click event
document.querySelector("#hindi").addEventListener("click", function(){
  // Printing the contents
  document.querySelector("#language-container").innerHTML = languageContentsContainer(hindiData.name, "Hindi", printCountriesSpoken(hindiData), notablePeopleContainer(hindiData), funFactsData(hindiData))

  document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")
  }


const hindiButton = document.querySelector("#hindi")
hindiButton.addEventListener("click", function(){
    document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")
    document.querySelector("#language-container").innerHTML += printCountriesSpoken(hindiData)
    document.querySelector("#language-container").innerHTML += funFactsData(hindiData)
    document.querySelector("#language-container").innerHTML += buildTranslatorContainer(hindiData.name.toLowerCase())
})


document.querySelector("#language-container").addEventListener("click", function () {
  if (event.target.id === "translate-btn-hindi") {
    
    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhraseObject = hindiData.dictionary[translate()]

    if(translatedPhraseObject !== undefined){
      const translatedPhrase = translatedPhraseObject.englishPronunciation

      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
    
  }
})

