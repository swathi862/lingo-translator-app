
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
  


  // hindi Info click event
document.querySelector("#hindi").addEventListener("click", function(){  
  // Add container class
  document.querySelector("#language-container").classList.add("container")
  // Printing the contents
  document.querySelector("#language-container").innerHTML = languageContentsContainer(hindiData.name, "Hindi", printCountriesSpoken(hindiData), notablePeopleContainer(hindiData), funFactsData(hindiData,""))
  // Translator print
  document.querySelector("#language-container").innerHTML += buildTranslatorContainer(hindiData.name.toLowerCase())

// Hindi translator click event
// document.querySelector("#language-container").addEventListener("click", function(){
//   if(event.target.id === "translate-btn-hindi"){

//     const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

//     const translatedPhraseObject = hindiData.dictionary[translate()]

//     if (translatedPhraseObject !== undefined){
//       const translatedPhrase = translatedPhraseObject.englishPronunciation
//       document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)

//       textToSpeechFunction(hindiData.name, toBeTranslatedValue, translatedPhrase)
//     }
//     }
// })

document.querySelector("#language-container").addEventListener("click", function(){
  if(event.target.id === "translate-btn-hindi"){
    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

    if(toBeTranslatedValue !== ""){
      apiFetch.getAll(toBeTranslatedValue, "en", "hi")
    }
    else{
      const translatedPhrase = "I'm sorry, the phrase you entered is not in our dictionary! Please, try another phrase :)"
      speechSynthesis.speak(new SpeechSynthesisUtterance(translatedPhrase))
      document.querySelector("#translator-container").innerHTML += `
      <p>${translatedPhrase}</p>`
    }
    }
})

})
