// Generic function to build an HTML component
function printElement(element, text, className) {
  return `<${element} class=${className}>${text}</${element}>`;
}

function printList(array, heading) {
  const listHeading = printElement("h4", heading, "text-center mt-4");
  let unorderedList = `<ul>`;
  for (let i = 0; i < array.length; i++) {
    unorderedList += `<li>${array[i]}</li>`;
  }
  unorderedList += "</ul>";
  return `${listHeading}${unorderedList}`;
}

function printFunFacts(languageObject) {
  let funFacts = "<h5>Fun Facts:</h5><section>";
  for (const fact in languageObject.funFacts) {
    funFacts += `<p>${fact}: `;
    if (Array.isArray(languageObject.funFacts[fact])) {
      funFacts += `${languageObject.funFacts[fact].join(", ")}</p>`;
    } else if (typeof languageObject.funFacts[fact] === "object") {
      funFacts += `<ul>`;
      for (const property in languageObject.funFacts[fact]) {
        funFacts += `<li>${property} : ${
          languageObject.funFacts[fact][property]
        }</li>`;
      }
      funFacts += `</ul>`;
    } else {
      funFacts += `${languageObject.funFacts[fact]}</p>`;
    }
  }
  return funFacts;
}

function printTranslatorInput(language) {
  let translatorHTMLString = `<div class="translator-form">
      <input type="text" id="${language}-input">
      <button id="${language}-submit">Translate to ${language}</button>
      <section id="${language}-output"></section>
    </div>`;
  return translatorHTMLString;
}

function buildLanguagePage(languageObject, language) {
  return `
${printElement("h2", languageObject.name, "text-center")}
<div class="row">
  <section class="col-sm-4">
    ${printList(languageObject.countriesSpoken, "Countries Spoken")}
  </section>
  <section class="col-sm-4">
    ${printList(languageObject.notablePeople, "Notable Spanish Speakers")}
  </section>
  <section class="col-sm-4">
    ${printFunFacts(languageObject)}
  </section>
</div>
${printTranslatorInput(language)}`;
}

