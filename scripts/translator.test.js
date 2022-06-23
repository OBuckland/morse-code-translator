import { Translator } from "./translator-class";

const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];
const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet, " ", "/")
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet, "/", " ")

// Test for characters 
it("should translate a letter from the English alphabet to the correct Morse Code character", () => {
    const translateLetter = englishToMorseTranslator.translate("a")
    expect (translateLetter).toBe(".-")
})

it("should translate a Morse Code character to the English alphabet equivilent", () => {
    const translateCharacter = morseToEnglishTranslator.translate("-...")
    expect (translateCharacter).toBe("b")

})

// Test translation of words 
it("should translate a word from English to Morse Code", () => {
    const translateWord = englishToMorseTranslator.translate("Hello")
    expect (translateWord).toBe(".... . .-.. .-.. ---")
})

it("should translate a word from  Morse Code to English", () => {
    const translateWord = morseToEnglishTranslator.translate("-.. .- .-. .-.. .. -. --.")
    expect (translateWord).toBe("darling")
})

// Test translation of sentances
it("should translate a sentance from Enlgish to Morse Code", () => {
    const translateSentanceToMorse = englishToMorseTranslator.translate("Hi there Blaise")
    expect (translateSentanceToMorse).toBe(".... ../- .... . .-. ./-... .-.. .- .. ... .")
})

it("should translate a sentance from Morse Code to English", () => {
    const translateSentanceToMorse = morseToEnglishTranslator.translate(".-- . .-.. -.-. --- -- ./.... --- -- .")
    expect (translateSentanceToMorse).toBe("welcome home")
})