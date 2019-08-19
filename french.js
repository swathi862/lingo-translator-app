const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
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

// Generic function to build an HTML component
function printElement(element, text, className) {
  return `<${element} class=${className}>${text}</${element}>`;
}

// Printer functions
function printLanguageHeading() {
  return printElement("h2", frenchData.name, "text-center mt-4");
}

function printCountries() {
  let countriesList = "<h5>Countries Spoken:</h5><ul>";
  for (var i = 0; i < frenchData.countriesSpoken.length; i++) {
    const currentCountry = frenchData.countriesSpoken[i];
    countriesList += printElement("li", currentCountry);
  }
  return (countriesList += "</ul>");
}

function printNotablePeople() {
  let peopleList = "<h5>Notable Speakers:</h5><ul>";
  for (var i = 0; i < frenchData.notablePeople.length; i++) {
    const currentPerson = frenchData.notablePeople[i];
    peopleList += printElement("li", currentPerson);
  }
  return (peopleList += "</ul>");
}

function printFunFacts() {
  let funFacts = "<h5>Fun Facts:</h5><section>";
  funFacts += `<p>Letters in alphabet: ${
    frenchData.funFacts.lettersInAlphabet
  }</p>`;
  funFacts += `<p>Number of speakers: ${
    frenchData.funFacts.numberOfSpeakers
  }</p>`;
  funFacts += `<p>Related languages: ${frenchData.funFacts.relatedLanguages.join(
    ", "
  )}</p>`;
  return (funFacts += "</section>");
}

function printTranslatorInput(language) {
  let translatorHTMLString = `<div class="translator-form">
    <input type="text" id="${language}-input">
    <button id="${language}-submit">Translate to ${language}</button>
    <section id="french-output"></section>
  </div>`;
  return translatorHTMLString;
}

function buildFrenchPage() {
  return `
${printLanguageHeading()}
<div class="row">
  <section class="col-sm-4">
    ${printCountries()}
  </section>
  <section class="col-sm-4">
    ${printNotablePeople()}
  </section>
  <section class="col-sm-4">
    ${printFunFacts()}
  </section>
</div>
${printTranslatorInput("french")}`;
}

// Add event listener to nav bar link that runs printer function
console.log(document.querySelector("#french"))
document.querySelector("#french").addEventListener("click", function(){
  console.log("clicked on this in the nav bar")
  document.querySelector("#language-container").innerHTML = buildFrenchPage()
})


// Event handler for translation button
document.querySelector("body").addEventListener("click", function() {
  if (event.target.id === "french-submit") {
    const input = document.querySelector("#french-input").value;
    const translatedPhrase = frenchData.dictionary[input];
    if (translatedPhrase) {
      document.querySelector("#french-output").innerHTML = translatedPhrase;
    } else {
      document.querySelector("#french-output").innerHTML =
        "Sorry, that phrase isn't in the dictionary";
    }
  }
});
