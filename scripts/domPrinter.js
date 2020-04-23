// The purpose of this file is to define functions that will return individual HTML components

// You should not call any of these functions in this file. Instead, you should call them in the individual file for your language (e.g. hindi.js)


// For example, we can define a function here that prints an H1 element

const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>`
}

// Go to french.js to see how we can execute this function

//spanish countries spoken loop
function printCountriesSpoken (language){

let countriesSpokenContainer = `<h3>Countries Spoken</h3>
<ul>`

for (let i=0; i < language.countriesSpoken.length; i++){
//   const countriesSpoken = spanishData.countriesSpoken[i]
  countriesSpokenContainer += `<li>${language.countriesSpoken[i]}</li>`
}
countriesSpokenContainer += `</ul>`
return countriesSpokenContainer
}
// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`

function buildTranslatorContainer () {
    return`
    <footer class = "page-footer font-small blue pt-4">
    <div class = "row">
        <div class = "col-sm" id = "translator-container">
            <input id = "text-area" type= "text" placeholder= "Enter text">
            <button id= "translate-btn" class="btn btn-primary auto">Translate</button>
        </div>
    </div>
    </footer>`
}

function buildTranslatedPhraseContainer (toBeTranslatedValue, translatedPhrase) {
    return`
    <div id = "phrase-container" class = "row">
        <p>The phrase <strong><em>${toBeTranslatedValue}</em></strong> translates to <strong><em>${translatedPhrase}</em></strong></p>
    </div>`
}

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
  
          document.querySelector("#translator-container").innerHTML += `
          <p>${translatedPhrase}</p>`
        }
}
