# Language Learning Dashboard

## Welcome to Lingo Language Learning Platform
You and your teammates have been hired to help us build the next DuoLingo, except without the terrifying owl mascot. Your first task is to build a dashboard that users will see as soon as they log in to their account. The dashboard should have a brief introduction to all of the languages that you _could_ learn on our platform. It will also have a limited translator for each language so users can test it out to see if they want to learn it.

## Instructions
1. Each team member should choose a language and build that language's DOM component
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
![mock up layout](images/mockup.png)

You can use a two column layout, a three column layout, or a four column layout. Bootstrap has already been added for you. [You're welcome to use their grid system to help with your layout.](https://getbootstrap.com/docs/4.0/layout/grid/)




