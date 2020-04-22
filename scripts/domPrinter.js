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