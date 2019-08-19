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


  function buildMandarinPage() {
    return `
  ${printElement("h2", mandarinData.name, "text-center")}
  <div class="row">
    <section class="col-sm-4">
      ${printList(mandarinData.countriesSpoken, "Countries Spoken")}
    </section>
    <section class="col-sm-4">
      ${printList(mandarinData.notablePeople, "Notable French Speakers")}
    </section>
    <section class="col-sm-4">
      ${printFunFacts(mandarinData)}
    </section>
  </div>
  ${printTranslatorInput("mandarin")}`;
  }

  document.querySelector("#mandarin").addEventListener("click", function(){
    document.querySelector("#language-container").innerHTML = buildMandarinPage()
  })

