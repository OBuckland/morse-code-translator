"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Translator =
/*#__PURE__*/
function () {
  function Translator(characterSeparator, characterJoiner, inputAlphabet, outputAlphabet, wordSeparator, wordJoiner) {
    _classCallCheck(this, Translator);

    this.characterSeparator = characterSeparator;
    this.characterJoiner = characterJoiner;
    this.inputAlphabet = inputAlphabet;
    this.outputAlphabet = outputAlphabet;
    this.wordSeparator = wordSeparator;
    this.wordJoiner = wordJoiner;
  } // I need to split the word down to characters 
  //then with each character find it in the object and return the value of the key.
  // push that to the output
  // add a joining space


  _createClass(Translator, [{
    key: "translateWord",
    value: function translateWord(inputText) {
      var _this = this;

      var output = "";
      var wordsArr = inputText.toUpperCase().split(this.wordSeparator);
      wordsArr.forEach(function (word) {
        var charactersArr = word.toUpperCase().split(_this.characterSeparator);
        charactersArr.forEach(function (character) {
          var index = _this.inputAlphabet.indexOf(character);

          output += _this.outputAlphabet[index].toLowerCase() + _this.characterJoiner;
        });
        output = output.trim();

        if (wordsArr.indexOf(word) < wordsArr.length - 1) {
          output += _this.wordJoiner;
        }
      });
      return output;
    }
  }]);

  return Translator;
}(); // translateWord(inputText) {
//     let output = "";
//     const wordsArr = inputText.toUpperCase().split(this.wordSeparator);
//     wordsArr.forEach((word) => {
//         const characters = word.toUpperCase().split(this.characterSeparator);
//         characters.forEach((character) => {
//            let index = this.inputAlphabet.indexOf(character)
//            output += this.outputAlphabet[index].toLowerCase() + this.characterJoiner
//            if(wordsArr.indexOf(word) != wordsArr.length){
//             output += this.characterJoiner
//            }
//         })
//         if(wordsArr.indexOf(word) != wordsArr.length) {
//             return output += this.wordJoiner
//         } 
//     })
//     return output 
// }   
// }


exports.Translator = Translator;