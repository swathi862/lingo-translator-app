
const hindiData = {
  name: "Hindi  ",
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
  }
};

document.querySelector("#hindi").addEventListener("click", () => {
  console.log("You clicked on the Hindi link in the nav bar")
  document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")
  document.querySelector("#language-container").innerHTML += buildTranslatorContainer()
})



document.querySelector("#language-container").addEventListener("click", function () {
  
  if (event.target.id === "translate-btn") {
    
    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    const translatedPhraseObject = hindiData.dictionary[translate()]

    const translatedPhrase = translatedPhraseObject.englishPronunciation

    document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
  }
})


  document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")

const hindiButton = document.querySelector("#hindi")
hindiButton.addEventListener("click", function(){
// console.log("you clicked the hindi button")
document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")
document.querySelector("#language-container").innerHTML += printCountriesSpoken(hindiData)
})
