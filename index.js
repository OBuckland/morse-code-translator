const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];

const inputText = document.querySelector(".input-text")
const outputText = document.querySelector(".output-text")
const translateToEnglishBtn = document.querySelector(".english-btn")
const translateToMorseBtn = document.querySelector(".morse-btn")
const h1 = document.querySelector("h1")

class Translator {

    constructor(splitCharacter, joinCharacter, inputAlphabet, outputAlphabet){
        this.splitCharacter = splitCharacter; 
        this.joinCharacter = joinCharacter;
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
    }

    // I need to split the word down to characters 
    //then with each character find it in the object and return the value of the key.
    // push that to the output
    // add a joining space
    translateWord(inputWord) {
        let output = "";
        const characters = inputWord.toUpperCase().split(this.splitCharacter);
        characters.map((character) => {
           let index = this.inputAlphabet.indexOf(character)
           output += this.joinCharacter + this.outputAlphabet[index].toLowerCase()
        })
        outputText.innerHTML = output;
    }
}

const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet) 
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet)

translateToMorseBtn.addEventListener("click",() => {
    englishToMorseTranslator.translateWord(inputText.value)
} )

translateToEnglishBtn.addEventListener("click", () => {
    morseToEnglishTranslator.translateWord(inputText.value)
}) 