const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];

const inputText = document.querySelector(".input-text")
const outputText = document.querySelector(".output-text")
const translateToEnglishBtn = document.querySelector(".english-btn")
const translateToMorseBtn = document.querySelector(".morse-btn")
const h1 = document.querySelector("h1")

class Translator {

    constructor(characterSeparator, characterJoiner, inputAlphabet, outputAlphabet, wordSeparator, wordJoiner){
        this.characterSeparator = characterSeparator; 
        this.characterJoiner = characterJoiner;
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
        this.wordSeparator = wordSeparator;
        this.wordJoiner = wordJoiner;
    }

    // I need to split the word down to characters 
    //then with each character find it in the object and return the value of the key.
    // push that to the output
    // add a joining space
    translateWord(inputText) {
        let output = "";
        const wordsArr = inputText.toUpperCase().split(this.wordSeparator);
        wordsArr.forEach((word) => {
            const characters = word.toUpperCase().split(this.characterSeparator);
            characters.forEach((character) => {
               let index = this.inputAlphabet.indexOf(character)
               output += this.characterJoiner + this.outputAlphabet[index].toLowerCase()
            })
            output += this.wordJoiner
        })
        return output 
    }   
}

const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet, " ", "/")
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet, "/", " ")

const translateToMorse = () => outputText.innerHTML = englishToMorseTranslator.translateWord(inputText.value)
const translateToEnglish =  () => outputText.innerHTML = morseToEnglishTranslator.translateWord(inputText.value)

translateToMorseBtn.addEventListener("click", (translateToMorse))

translateToEnglishBtn.addEventListener("click", (translateToEnglish)) 