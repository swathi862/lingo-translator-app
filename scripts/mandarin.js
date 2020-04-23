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
 


  // Mandarin click event
  document.querySelector("#mandarin").addEventListener("click", function(){
    // Printing the contents
    const pageContentContainer = document.querySelector("#language-container")
    pageContentContainer.innerHTML = languageContentsContainer(mandarinData.name, "Mandarin", printCountriesSpoken(mandarinData), notablePeopleContainer(mandarinData), funFactsData(mandarinData))
    
    // Mandarin 
    pageContentContainer.innerHTML += mandarinFunFactsData()

  })


  
  
  
  const mandarinButton = document.querySelector("#mandarin")
  mandarinButton.addEventListener("click", function(){
    document.querySelector("#language-container").innerHTML = h1(mandarinData.name, "mandarin-heading")
    document.querySelector("#language-container").innerHTML += printCountriesSpoken(mandarinData)
    document.querySelector("#language-container").innerHTML += funFactsData(mandarinData)
    document.querySelector("#language-container").innerHTML +=  `<h4>Dialect Info</h4>
                                                                <p>${mandarinData.funFacts.mandrinInfo.dialectInfo}</p>
                                                                <h4>Chinese Dialects</h4>
                                                                <p>${mandarinData.funFacts.mandrinInfo.chineseDialects}</p>`
    document.querySelector("#language-container").innerHTML += buildTranslatorContainer(mandarinData.name.toLowerCase())
  })
  
  document.querySelector("#language-container").addEventListener("click", function(){
    if(event.target.id === "translate-btn-mandarin"){

      const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()
      
      const translatedPhrase = mandarinData.dictionary[translate()]

      if (translatedPhrase !== undefined){
        document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
      }
    }
  })

//   document.querySelector("#mandarin").addEventListener("click", function(){
//     const pageContentContainer = document.querySelector("#language-container");
//     pageContentContainer.innerHTML = h1(mandarinData.name, "mandarin-heading")  
//   pageContentContainer.innerHTML += funFactsData(mandarinData)
//   pageContentContainer.innerHTML += 
//   `<h4>Dialect Info</h4>
//   <p>${mandarinData.funFacts.mandrinInfo.dialectInfo}</p>
//   <h4>Chinese Dialects</h4>
//   <p>${mandarinData.funFacts.mandrinInfo.chineseDialects}</p>`
// })
  
  
  
//   const mandarinButton = document.querySelector("#mandarin")
//   mandarinButton.addEventListener("click", function(){
//     document.querySelector("#language-container").innerHTML = h1(mandarinData.name, "mandarin-heading")
//     document.querySelector("#language-container").innerHTML += printCountriesSpoken(mandarinData)
//     document.querySelector("#language-container").innerHTML += funFactsData(mandarinData)
//     document.querySelector("#language-container").innerHTML +=  `<h4>Dialect Info</h4>
//                                                                 <p>${mandarinData.funFacts.mandrinInfo.dialectInfo}</p>
//                                                                 <h4>Chinese Dialects</h4>
//                                                                 <p>${mandarinData.funFacts.mandrinInfo.chineseDialects}</p>`
//     document.querySelector("#language-container").innerHTML += buildTranslatorContainer(mandarinData.name.toLowerCase())
//   })
  
//   document.querySelector("#language-container").addEventListener("click", function(){
//     if(event.target.id === "translate-btn-mandarin"){

//       const toBeTranslatedValue = document.querySelector("#text-area").value.toLowerCase()
      
//       const translatedPhrase = mandarinData.dictionary[translate()]

//       if (translatedPhrase !== undefined){
//         document.querySelector("#translator-container").innerHTML += buildTranslatedPhraseContainer(toBeTranslatedValue, translatedPhrase)
//       }
//     }
//   })
