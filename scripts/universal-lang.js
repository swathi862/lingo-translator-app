const languageCodesObject = {
  Azerbaijan:	 "az",
      Afrikaans:	  "af",
      Albanian:	 "sq",
      Amharic:	  "am", 
      Arabic:	 "ar", 
      Armenian:	 "hy",
      Bashkir:	  "ba",
      Basque:	 "eu",
      Belarusian:	 "be", 
      Bengali:	  "bn", 
      Bosnian:	  "bs", 
      Bulgarian:	  "bg", 
      Burmese:	  "my", 
      Catalan:	  "ca", 
      Cebuano:	  "ceb",
      Chinese:	  "zh", 
      Croatian:	 "hr",
      Czech:	  "cs",
      Danish:	 "da", 
      Dutch:	  "nl", 
      English:	  "en", 
      Esperanto:	  "eo",
      Estonian:	 "et",
      Finnish:	  "fi",
      French:	 "fr",
      Galician:	 "gl",
      Georgian:	 "ka",
      German:	 "de",
      Greek:	  "el",
      Gujarati:	 "gu",
      Haitian:	 "ht",
      Hebrew:	 "he", 
      Hill_Mari:	  "mrj",
      Hindi:	  "hi",
      Hungarian:	  "hu", 
      Icelandic:	  "is", 
      Indonesian:	 "id",
      Irish:	  "ga", 
      Italian:	  "it", 
      Japanese:	 "ja",
      Javanese:	 "jv",
      Kannada:	  "kn", 
      Kazakh:	 "kk", 
      Khmer:	  "km", 
      Korean:	 "ko", 
      Kyrgyz:	 "ky", 
      Laotian:	  "lo", 
      Latin:	  "la", 
      Latvian:	  "lv", 
      Lithuanian:	 "lt", 
      Luxembourgish:	  "lb", 
      Macedonian:	 "mk",
      Malagasy:	 "mg", 
      Malay:	  "ms",  
      Malayalam:	  "ml",
      Maltese:	  "mt",
      Maori:	  "mi",
      Marathi:	  "mr",
      Mari:	 "mhr",
      Mongolian:	  "mn",
      Nepali:	 "ne",
      Norwegian:	  "no",
      Papiamento:	 "pap",
      Persian:	  "fa",
      Polish:	 "pl",
      Portuguese:	 "pt",
      Punjabi:	  "pa",
      Romanian:	 "ro",
      Russian:	  "ru",
      Scottish:	 "gd",
      Serbian:	  "sr",
      Sinhala:	  "si",
      Slovakian:	  "sk",
      Slovenian:	  "sl",
      Spanish:	  "es", 
      Sundanese:	  "su",
      Swahili:	  "sw",
      Swedish:	  "sv",
      Tagalog:	  "tl",
      Tajik:	  "tg",
      Tamil:	  "ta",
      Tatar:	  "tt",
      Telugu:	 "te",
      Thai:	 "th",
      Turkish:	  "tr",
      Udmurt:	 "udm",
      Ukrainian:	  "uk",
      Urdu:	 "ur",
      Uzbek:	  "uz",
      Vietnamese:	 "vi", 
      Welsh:	  "cy",
      Xhosa:	  "xh", 
      Yiddish:	  "yi",
  
  }

  document.querySelector("#universal").addEventListener("click", function(){

    document.querySelector("#language-container").classList.add("container")

    document.querySelector("#language-container").innerHTML = `<div class="jumbotron d-flex justify-content-center h-25 d-inline-block">
    <h1 class="universal-lang-heading" >Universal Language Translator</h1>
        </div>`

    document.querySelector("#language-container").innerHTML += buildLanguageOptionsContainer("Select language to translate phrase from:", "from")

    document.querySelector("#language-container").innerHTML += buildLanguageOptionsContainer("Select language to translate phrase to:", "to")

    document.querySelector("#language-container").innerHTML += buildUniversalTranslatorContainer()
  })

  document.querySelector("#language-container").addEventListener("click", function(){
    if(event.target.id === "translate-btn-universal"){
      const toBeTranslatedValue = document.querySelector("#user-input").value.toLowerCase()

      const languageToTranslateFrom = document.querySelector("#language-selector-from").value
      const languageToTranslateTo = document.querySelector("#language-selector-to").value

      const languageFrom = languageCodesObject[`${languageToTranslateFrom}`]
      const languageTo = languageCodesObject[`${languageToTranslateTo}`]
      console.log(languageTo)

      if(toBeTranslatedValue !== ""){
        apiFetch.getAll(toBeTranslatedValue, languageFrom, languageTo)
      }

      else{
        const translatedPhrase = "I'm sorry, the phrase you entered is not in our dictionary! Please, try another phrase :)"
        speechSynthesis.speak(new SpeechSynthesisUtterance(translatedPhrase))
        document.querySelector("#translator-container").innerHTML += `
        <p>${translatedPhrase}</p>`
      }
      }
  })
