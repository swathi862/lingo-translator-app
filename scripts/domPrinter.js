// Splash page DOM printer
function splashpageContainer(){
    return `
    <div class="backSplash d-flex justify-content-center">
      <div class="card" style="width: 32rem">
        <div class="card-body" style="width: 30rem">
        <form class="p-4">
            <div class="form-group">
                <label for="exampleDropdownFormEmail2">Email address</label>
                <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
            </div>
            <div class="form-group">
                <label for="exampleDropdownFormPassword2">Password</label>
                <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                    <label class="form-check-label" for="dropdownCheck2">
                    Remember me
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary submit-btn">Sign in</button>
        </form>
        </div>
      </div>
  </div>
    `
}

// Notable People loop
function notablePeopleContainer(language){
    let notablePeoplehtmlString = `
    <ul>`
    
    // Notable people loop
    for (let i = 0; i < language.notablePeople.length; i++) {
        notablePeoplehtmlString += `<li>${language.notablePeople[i]}</li>`;
      }
      notablePeoplehtmlString += `</ul>`;

    return notablePeoplehtmlString
}

// Countries Spoken loop
function printCountriesSpoken (language){

    let countriesSpokenContainer = `
    <ul>`
    
    for (let i=0; i < language.countriesSpoken.length; i++){
    //   const countriesSpoken = spanishData.countriesSpoken[i]
      countriesSpokenContainer += `<li>${language.countriesSpoken[i]}</li>`
    }
    countriesSpokenContainer += `</ul>`
    return countriesSpokenContainer
    }

function mandarinFunFactsData(){
    return `
    <h4>Dialect Info</h4>
    <p>${mandarinData.funFacts.mandrinInfo.dialectInfo}</p>
    <h4>Chinese Dialects</h4>
    <p>${mandarinData.funFacts.mandrinInfo.chineseDialects}</p>
    `
}

//Function for printing 'Fun Facts' section to page
function funFactsData(languageObject, funMandarin){
    let funFactString = `
    <div>
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
    ${funMandarin}
    </div>`

    return funFactString
}

    
// Dom Printer function for accordion and contents
const languageContentsContainer = (classNames, text, countriesSpoken, notablePeople, funFacts) => {
    return `
    <div class="jumbotron d-flex justify-content-center h-25 d-inline-block">
        <h1 class="${classNames}" >${text}</h1>
    </div>

    <div class="accordion" id="accordionExample">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Countries Spoken
          </button>
        </h2>
      </div>
  
      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
        ${countriesSpoken}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Notable People
          </button>
        </h2>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div class="card-body">
        ${notablePeople}        
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="headingThree">
        <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Fun Facts
          </button>
        </h2>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div class="card-body">
        ${funFacts}        
        </div>
      </div>
    </div>
  </div>
  <div class="row">
  </div>
    <br>
    <div class="jumbotron d-flex justify-content-center h-25 d-inline-block">
        <h3>Translate Now!<h3>
    </div>`
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

function buildUniversalTranslatorContainer () {
  return`
  <footer class = "page-footer font-small blue pt-4">
  <div class = "row">
      <div class = "col-sm" id = "translator-container">
          <input id = "user-input" type= "text" placeholder= "Enter text">
          <button id= "translate-btn-universal" class="btn btn-primary auto">Translate</button>
      </div>
  </div>
  </footer>`
}

function buildLanguageOptionsContainer (labelName, selectIDAddOn) {
  let languageArray = Object.keys(languageCodesObject)
  let languageOptionsHTMLString = `<div class = "row">
  <div class = "col-sm" id = "language-options">
    <label for = "languages">${labelName}</label>
      <select id= "language-selector-${selectIDAddOn}">`

    for (let i = 0; i < languageArray.length; i++){
      languageOptionsHTMLString += `<option>${languageArray[i]}</option>`
    }

  languageOptionsHTMLString += `</select>
  </div>`

  return languageOptionsHTMLString
}


// Function that matches a phrase entered through user input to a key from the language's dictionary; returns that key
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

//Function for text to speech
function textToSpeechFunction (languageName, toBeTranslatedValue, translatedPhrase){

    let utterance = new SpeechSynthesisUtterance(`The phrase ${toBeTranslatedValue} translates to ${translatedPhrase}`)

    if (languageName === "Hindi"){
        utterance.lang = 'hi-IN'
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance)
    }
    else if (languageName === "French"){
        utterance.lang = 'fr-FR'
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance)
    }
    else if (languageName === "Spanish"){
        utterance.lang = 'es-ES'
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance)
    }
    else if (languageName === "Mandarin"){
        utterance.lang = 'zh-CN'
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance)
    }

}

//Function for universal Translator API
const apiFetch = {
  getAll: (text, languageFrom, languageTo) => {
      fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200420T153316Z.67b81eb3be4a746e.9ef97414c4d9092d1fa3de6691239ca6795ce0cb&text=${text}&lang=${languageFrom}-${languageTo}&format=html
      `)
      .then(r => r.json())
      .then(pr => pr.text.forEach(element => {
      document.querySelector("#translator-container").innerHTML +=         
      `<div id = "phrase-container" class = "row">
      <p>The phrase <strong><em>${text}</em></strong> translates to <strong><em>${element}</em></strong></p>
      </div>`
      let utterance = new SpeechSynthesisUtterance(`The phrase ${text} translates to ${element}`)

      utterance.lang = languageTo
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance)
      }))
  }
}