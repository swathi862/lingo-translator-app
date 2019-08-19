const spanishData = {
    name: "Spanish",
    notablePeople: [
      "Antonio Banderas",
      "Enrique Iglesias",
      "Rita Moreno",
      "Penelope Cruz"
    ],
    funFacts: {
      relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
      lettersInAlphabet: 27,
      numberOfSpeakers: "more than 437 million"
    },
    countriesSpoken: [
      "Argentina",
      "Bolivia",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Dominican Republic",
      "Equador",
      "El Salvador",
      "Equatorial Guinea",
      "Guetemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Mali",
      "Monaco",
      "Paraguay",
      "Peru",
      "Puerto Rico",
      "Spain",
      "Uruguay",
      "Venezuela"
    ],
    dictionary: {
      hello: "Hola",
      goodbye: "Adiós",
      thankYou: "Gracias",
      goodEvening: "Buena noches",
      howAreYou: "¿cómo estás?",
      whatsYourName: "cuál es tu nombre?"
    }
  };


  function buildSpanishPage() {
    return `
  ${printElement("h2", spanishData.name, "text-center")}
  <div class="row">
    <section class="col-sm-4">
      ${printList(spanishData.countriesSpoken, "Countries Spoken")}
    </section>
    <section class="col-sm-4">
      ${printList(spanishData.notablePeople, "Notable Spanish Speakers")}
    </section>
    <section class="col-sm-4">
      ${printFunFacts(spanishData)}
    </section>
  </div>
  ${printTranslatorInput("spanish")}`;
  }

  document.querySelector("#spanish").addEventListener("click", function(){
    document.querySelector("#language-container").innerHTML = buildSpanishPage()
  })

  // Event handler for translation button
document.querySelector("body").addEventListener("click", function() {
  if (event.target.id === "spanish-submit") {
    const input = document.querySelector("#spanish-input").value;
    const translatedPhrase = spanishData.dictionary[input];
    if (translatedPhrase) {
      document.querySelector("#spanish-output").innerHTML = translatedPhrase;
    } else {
      document.querySelector("#spanish-output").innerHTML =
        "Sorry, that phrase isn't in the dictionary";
    }
  }
});