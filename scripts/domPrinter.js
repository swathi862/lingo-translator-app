// The purpose of this file is to define functions that will return individual HTML components

// You should not call any of these functions in this file. Instead, you should call them in the individual file for your language (e.g. hindi.js)


// For example, we can define a function here that prints an H1 element

// const h1 = (text, classNames) => {
//     return `<h1 class="${classNames}">${text}</h1>`
// }


// Go to french.js to see how we can execute this function

// Notable people container
function notablePeopleContainer(language){
    let notablePeoplehtmlString = `
    <h3>Notable People</h3>
    <ul>`
    
    // Notable people loop
    for (let i = 0; i < language.notablePeople.length; i++) {
        notablePeoplehtmlString += `<li>${language.notablePeople[i]}</li>`;
      }
      notablePeoplehtmlString += `</ul>`;

    return notablePeoplehtmlString
}


const languageContentsContainer = (classNames, text, countriesSpoken, notablePeople, funFacts) => {
    return `
    <h1 class="${classNames}">${text}</h1>
    <div class="row align-items-start">
        <div class="col" id="countries-spoken">
            <div>${countriesSpoken}</div>        
        </div>
        <div class="col" id="notable-people">
            <div>${notablePeople}</div> 
        </div>
        <div class="col" id="fun-facts">
            <div>${funFacts}</div>        
        </div>
    </div>`
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

