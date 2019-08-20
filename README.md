# Language Learning Dashboard

## Welcome to Lingo Language Learning Platform
You and your teammates have been hired to help us build the next DuoLingo, except without the terrifying owl mascot. Your first task is to build a dashboard that users will see as soon as they log in to their account. The dashboard should have a brief introduction to all of the languages that you _could_ learn on our platform. It will also have a limited translator for each language so users can test it out to see if they want to learn it.


## MVP Definition (Minimum Viable Product)
1. When a user clicks on a link in the nav bar, they should see that language's information displayed on your web page.
    - All of the information you need to display is stored in objects in your JavaScript files
1. Language information should be displayed in a two, three, or four column layout. You can decide how many columns you want to use as a team. Your layout should be consistent across all pages.![mock up layout](images/mockup.png)

## Stretch Goals
#### 1. Translator
1. Add a section at the bottom of your page for a translator. The section should have an text input and a button that says "Translate".
1. When the user enters a phrase and clicks the "Translate" button, they should see either the translated phrase from that language's dictionary or, if the entered phrase is not in the dictionary, a helpful error message.

#### 2. Dynamic Buttons
1. Refactor your JavaScript so that, instead of printing all of the information at once, you instead print buttons with each property's name. (For example, one button might say "Fun Facts" and another might say "Countries Spoken".)
1. When a user clicks a button, the corresponding information should be displayed.

#### 3. Add sound to your translator
1. Add a "Play" button to your translator. When the user clicks the "Play" button, they should hear the translated phrase.
    - Use the [Speech Synthesis API](https://flaviocopes.com/speech-synthesis-api/) that's built into your browser.

#### 4. JOOOOOOOHN CEEEENAAAAAAA
1. If John Cena is a notable speaker of your language, his name should be bold, uppercase, huge, and gold.
1. When a user hovers over John Cena's name, they should hear "JOOOOOOOHN CEEEENAAAAAAA" play as an audio clip from the browser. Use the same Speech Synthesis API from step 3.

#### 5. Translation API
1. Instead of using the dictionary objects in your JavaScript files, use this free translation API to translate any word or phrase into your given language.


## Instructions
1. Each team member should choose a language and build that language's DOM components
1. Each team member should write all of their code in the JavaScript file that matches the language they chose.
        - For example, if you chose Hindi, you'd be writing all yoru code in `hindi.js`
1. Use the language data in your JavaScript file. Your job is to print it to the DOM when the user clicks on the appropriate link in the nav bar.
    - For example, when the user clicks on "Hindi" in the nav bar, _only_ the information about the Hindi language should print to the DOM
    - If the user then clicks on "French" in the nav bar, the DOM component representing Hindi should disappear and be replaced by the DOM component representing French.
1. You should plan on writing a seperate printer function for each property in your language object

## Learning Objectives
1. Practice printing to the DOM with JavaScript
1. Practice using single responsibility functions
1. Practice writing loops and conditionals
1. Practice click events and selecting user inputs

## Project Specs
Your dashboard will be a **Single Page Application** or SPA. This means that you will only have one `index.html` file, and you'll swap out what the user sees dynamically with JavaScript.

We've given you some boilerplate code! Here's what you're working with:

#### Script files
You should have four script files-- one for each language. They're already linked in your `index.html` file. Each script file has an object with data about that language. You should write all of your printer functions in the same script file as your language object.

#### index.html
We've given you some starter code in your `index.html` file. You should see:
1. A nav bar using Bootstrap classes
1. A container with an id of `"language-container"`

#### Layout
When the user clicks on a link in the nav bar, that language's content should print to the container with the id of `"language-container"`.

Each language component should look something like this:


You can use a two column layout, a three column layout, or a four column layout. Bootstrap has already been added for you. [You're welcome to use their grid system to help with your layout.](https://getbootstrap.com/docs/4.0/layout/grid/)




