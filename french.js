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


function buildFrenchPage() {
  return `
${printElement("h2", frenchData.name, "text-center")}
<div class="row">
  <section class="col-sm-4">
    ${printList(frenchData.countriesSpoken, "Countries Spoken")}
  </section>
  <section class="col-sm-4">
    ${printList(frenchData.notablePeople, "Notable French Speakers")}
  </section>
  <section class="col-sm-4">
    ${printFunFacts(frenchData)}
  </section>
</div>
${printTranslatorInput("french")}`;
}

// Add event listener to nav bar link that runs printer function
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
