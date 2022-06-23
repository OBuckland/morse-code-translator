import { Translator } from "./translator-class";
const englishAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?"];
const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....--",".....","-....","--...","---..","----.","-----",".-.-.-","--..--","..--.."];

const englishToMorseTranslator = new Translator ("", " ", englishAlphabet, morseAlphabet, " ", "/")
const morseToEnglishTranslator = new Translator (" ", "", morseAlphabet, englishAlphabet, "/", " ")

// Test for characters 
it("should translate a letter from the English alphabet to the correct Morse Code character", () => {
    const translateLetter = englishToMorseTranslator.translateWord("a")
    expect (translateLetter).toBe(".-")
})

it("should translate a Morse Code character to the English alphabet equivilent", () => {
    const translateCharacter = morseToEnglishTranslator.translateWord("-...")
    expect (translateCharacter).toBe("b")

})

// TEst for words 
it("should translate a word from English to Morse Code", () => {
    const translateWord = englishToMorseTranslator.translateWord("Hello")
    expect (translateWord).toBe(".... . .-.. .-.. ---")
})

it("should translate a word from  Morse Code to English", () => {
    const translateWord = morseToEnglishTranslator.translateWord("-.. .- .-. .-.. .. -. --.")
    expect (translateWord).toBe("darling")
})
// TEst for senceances

it("should translate a sentance from Enlgish to Morse Code", () => {
    const translateSentanceToMorse = englishToMorseTranslator.translateWord("Hi there Blaise")
    expect (translateSentanceToMorse).toBe(".... ../- .... . .-. ./-... .-.. .- .. ... .")
})

it("should translate a sentance from Morse Code to English", () => {
    const translateSentanceToMorse = morseToEnglishTranslator.translateWord(".-- . .-.. -.-. --- -- ./.... --- -- .")
    expect (translateSentanceToMorse).toBe("welcome home")
})

// it("should translate a sentance from Enlgish to Morse Code", () => {
//     const translateSentanceToMorse = englishToMorseTranslator.translateWord("Welcome home me")
//     expect (translateSentanceToMorse).toBe(".-- . .-.. -.-. --- -- ./.... --- -- ./-- .")
// })