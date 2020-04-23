// The purpose of this file is to define functions that will return individual HTML components

// You should not call any of these functions in this file. Instead, you should call them in the individual file for your language (e.g. hindi.js)


// For example, we can define a function here that prints an H1 element

const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>`
}

function funFactsData(languageObject){
    let funFactString = `
    <div>
    <h2>Fun Facts</h2>
    <h4>Related Languages</h4><ul>`

    for(i = 0; i < languageObject.funFacts.relatedLanguages.length; i++){
    funFactString += `<li>${languageObject.funFacts.relatedLanguages[i]}</li>`
    }

    funFactString += `</ul><h4>Letters in the Alphabet</h4>
    <p>${languageObject.funFacts.lettersInAlphabet}</p>
    <h4>Number of Speakers</h4>
    <p>${languageObject.funFacts.numberOfSpeakers}</p>
    </div>`

    return funFactString
}





// Go to french.js to see how we can execute this function


// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`




// function funFactsData(languageObject){
//     for(i = 0; i < languageObject.funFacts.relatedLanguages.length; i++)
//     return  `<div>
//     <h2>Fun Facts</h2>
//     <h4>Related Languages</h4>
//     <li>${languageObject.funFacts.relatedLanguages[0]}, ${languageObject.funFacts.relatedLanguages[1]}</li>
//     <h4>Letters in the Alphabet</h4>
//     <li>${languageObject.funFacts.lettersInAlphabet}</li>
//     <h4>Number of Speakers</h4>
//     <li>${languageObject.funFacts.numberOfSpeakers}</li>
//     </div>`
// }