
//Function for printing Langauge Name h1 element
function h1(text, classNames) {
    return `<h1 class="${classNames}">${text}</h1>`
}


//Function for printing 'Fun Facts' section to page
function funFactsData(languageObject){
    let funFactString = `
    <div>
    <h2>Fun Facts</h2>
    <h4>Related Languages</h4><ul>`

    if(languageObject.name === "Hindi"){
        funFactString += `<li>${languageObject.funFacts.relatedLanguages}</li>`
    }

    else{
        for(i = 0; i < languageObject.funFacts.relatedLanguages.length; i++){
            funFactString += `<li>${languageObject.funFacts.relatedLanguages[i]}</li>`
            }
    }

    funFactString += `</ul><h4>Letters in the Alphabet</h4>
    <p>${languageObject.funFacts.lettersInAlphabet}</p>
    <h4>Number of Speakers</h4>
    <p>${languageObject.funFacts.numberOfSpeakers}</p>
    </div>`

    return funFactString
}


//Function for printing 'Countries Spoken' section to page
function printCountriesSpoken (language){

let countriesSpokenContainer = `<h3>Countries Spoken</h3>
<ul>`

for (let i=0; i < language.countriesSpoken.length; i++){
  countriesSpokenContainer += `<li>${language.countriesSpoken[i]}</li>`
}
countriesSpokenContainer += `</ul>`
return countriesSpokenContainer
}


//Function for building translator container (user input with button)
function buildTranslatorContainer (languageName) {
    return`
    <footer class = "page-footer font-small blue pt-4">
    <div class = "row">
        <div class = "col-sm" id = "translator-container">
            <input id = "text-area" type= "text" placeholder= "Enter text">
            <button id= "translate-btn-${languageName}" class="btn btn-primary auto">Translate</button>
        </div>
    </div>
    </footer>`
}


//Function that matches a phrase entered through user input to a key from the language's dictionary; returns that key
function translate () {
    let phraseToLookUp;

    const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()

        if (toBeTranslatedValue === "hello" || toBeTranslatedValue === "hi"){
          return phraseToLookUp = "hello"
        }
  
        else if (toBeTranslatedValue.includes("bye")){
          return phraseToLookUp = "goodbye"
        }
  
        else if (toBeTranslatedValue.includes("thank")){
          return phraseToLookUp = "thankYou"
        }
  
        else if (toBeTranslatedValue.includes("evening")){
          return phraseToLookUp = "goodEvening"
        }
  
        else if (toBeTranslatedValue.includes("how") && toBeTranslatedValue.includes("are") && toBeTranslatedValue.includes("you")){
          return phraseToLookUp = "howAreYou"
        }
  
        else if (toBeTranslatedValue.includes("what") && toBeTranslatedValue.includes("your") && toBeTranslatedValue.includes("name")){
          return phraseToLookUp = "whatsYourName"
        }
  
        else{
          const translatedPhrase = "I'm sorry, the phrase you entered is not in our dictionary! Please, try another phrase :)"
          speechSynthesis.speak(new SpeechSynthesisUtterance(translatedPhrase))
          document.querySelector("#translator-container").innerHTML += `
          <p>${translatedPhrase}</p>`
        }
}


//Function for building translated phrase container
function buildTranslatedPhraseContainer (toBeTranslatedValue, translatedPhrase) {
    return`
        <div id = "phrase-container" class = "row">
            <p>The phrase <strong><em>${toBeTranslatedValue}</em></strong> translates to <strong><em>${translatedPhrase}</em></strong></p>
        </div>`
}

// function textToSpeechFunction (translatedString){
//     return
//     const text = `${translatedString}`.value
//     console.log(text)
// }