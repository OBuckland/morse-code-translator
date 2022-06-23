import { Translator } from "./translator-class.js";

const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];

const inputText = document.querySelector(".input-text")
const outputText = document.querySelector(".output-text")
const translateToEnglishBtn = document.querySelector(".english-btn")
const translateToMorseBtn = document.querySelector(".morse-btn")

const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet, " ", "/")
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet, "/", " ")

const translateToMorse = () => outputText.innerHTML = englishToMorseTranslator.translate(inputText.value)
const translateToEnglish =  () => outputText.innerHTML = morseToEnglishTranslator.translate(inputText.value)

translateToMorseBtn.addEventListener("click", (translateToMorse))
translateToEnglishBtn.addEventListener("click", (translateToEnglish)) 