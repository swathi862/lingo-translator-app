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
 
  const mandarinButton = document.querySelector("#mandarin")
  mandarinButton.addEventListener("click", function(){
  // console.log("you clicked the mandarin button")
  document.querySelector("#language-container").innerHTML = h1(mandarinData.name, "mandarin-heading")
  document.querySelector("#language-container").innerHTML += printCountriesSpoken(mandarinData)
  document.querySelector("#language-container").innerHTML += buildTranslatorContainer(mandarinData.name.toLowerCase())
  })


  // document.querySelector("#mandarin").addEventListener("click", () => {
  //   document.querySelector("#language-container").innerHTML = h1(mandarinData.name, "mandarin-heading")
  //   document.querySelector("#language-container").innerHTML += buildTranslatorContainer()
  // })
  
  document.querySelector("#language-container").addEventListener("click", function(){
    console.log("You are in the translator part")
    if(event.target.id === "translate-btn-mandarin"){
      console.log(mandarinData.dictionary)
      const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()
      
      const translatedPhrase = mandarinData.dictionary[translate()]
  
      document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
    }
  })



