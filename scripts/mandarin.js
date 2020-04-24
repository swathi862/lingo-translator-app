const mandarinData = {
    name: "Mandarin",
    notablePeople: [
      "Herbert Hoover",
      "Koji Yano",
      "Mark Henry Rowswell",
      "Mark Zuckerberg",
      "Ming Na Wen",
      "John Cena",
      "Kevin Rudd",
      "Park Geun-hye",
      "Vanessa Branch",
      "Mira Sorvino",
      "Bob Woodruff",
      "Takeshi Kaneshiro",
      "Lou Jing"
    ],
    funFacts: {
      relatedLanguages: ["Korean", "Japanese"],
      lettersInAlphabet: 50000,
      numberOfSpeakers: "about 900 million",
      mandrinInfo: {
        dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
        chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
      }
    },
    countriesSpoken: [
      "China",
      "Singapore",
      "Taiwan"
    ],
    dictionary: {
      hello: "你好",
      goodbye: "再见",
      thankYou: "谢谢",
      goodEvening: "晚上好",
      howAreYou: "你好吗",
      whatsYourName: " 你叫什么名字"
    }
  }
 
  // Mandarin Info click event
  document.querySelector("#mandarin").addEventListener("click", function(){
    // Add container class
    document.querySelector("#language-container").classList.add("container")
    // Printing the contents
    document.querySelector("#language-container").innerHTML = languageContentsContainer(mandarinData.name, "Mandarin", printCountriesSpoken(mandarinData), notablePeopleContainer(mandarinData), funFactsData(mandarinData, mandarinFunFactsData()))
    // Translator print
    document.querySelector("#language-container").innerHTML += buildTranslatorContainer(mandarinData.name.toLowerCase())
    
  })
  
  // Mandarin translator click event
  // document.querySelector("#language-container").addEventListener("click", function(){
  //   if(event.target.id === "translate-btn-mandarin"){
  
  //     const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()
  
  //     const translatedPhrase = mandarinData.dictionary[translate()]
  
  //     if (translatedPhrase !== undefined){
  //       document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)

  //       textToSpeechFunction(mandarinData.name, toBeTranslatedValue, translatedPhrase)
  //     }
  //   }
  // })
  
  document.querySelector("#language-container").addEventListener("click", function(){
    if(event.target.id === "translate-btn-mandarin"){
      const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()
  
      if(toBeTranslatedValue !== ""){
        apiFetch.getAll(toBeTranslatedValue, "en", "zh")
      }
      else{
        const translatedPhrase = "I'm sorry, the phrase you entered is not in our dictionary! Please, try another phrase :)"
        speechSynthesis.speak(new SpeechSynthesisUtterance(translatedPhrase))
        document.querySelector("#translator-container").innerHTML += `
        <p>${translatedPhrase}</p>`
      }
  
      }
  })
