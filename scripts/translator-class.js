export class Translator {

    constructor(characterSeparator, characterJoiner, inputAlphabet, outputAlphabet, wordSeparator, wordJoiner){
        this.characterSeparator = characterSeparator; 
        this.characterJoiner = characterJoiner;
        this.inputAlphabet = inputAlphabet;
        this.outputAlphabet = outputAlphabet;
        this.wordSeparator = wordSeparator;
        this.wordJoiner = wordJoiner;
    }

    // split the word down to characters 
    // then with each character find it in the object and return the value of the key.
    // push that to the output
    // add a joining space
    
    translate(inputText) {
        let output = "";
        const wordsArr = inputText.toUpperCase().split(this.wordSeparator);
        wordsArr.forEach((word) => {
            const charactersArr = word.toUpperCase().split(this.characterSeparator);
            charactersArr.forEach((character) => {
               let index = this.inputAlphabet.indexOf(character)
               output += this.outputAlphabet[index].toLowerCase() + this.characterJoiner;
            })             
            output = output.trim()
            if(wordsArr.indexOf(word) < (wordsArr.length -1)) {
              output += this.wordJoiner
            } 
        })
        return output 
    } 
}