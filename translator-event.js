// Event handler for translation button
document.querySelector("body").addEventListener("click", function() {
    const language = event.target.id.split("-")[0];
    console.log(event.target.id.split("-"))
    if (event.target.id.split("-")[1] === "submit") {
      const input = document.querySelector(`#${language}-input`).value;
      let translatedPhrase = "";

      if (language === "spanish") {
        translatedPhrase = spanishData.dictionary[input];
      } else if (language === "french") {
        translatedPhrase = frenchData.dictionary[input];
      } else if (language === "hindi") {
        translatedPhrase = ""
      } else if (language === "mandarin") {
        translatedPhrase = mandarinData.dictionary[input];
      }

      if (translatedPhrase) {
        document.querySelector(`#${language}-output`).innerHTML = translatedPhrase;
      } else {
        document.querySelector(`#${language}-output`).innerHTML =
          "Sorry, that phrase isn't in the dictionary";
      }
    }
  });
