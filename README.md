# **Morse Code Translator**
***

### **Description**
This translator can translate between Morse Code and English. The translator has been built using HTML, JavaScript and CSS. It has been tested using Jest.

---
| **Table of contents** |
|---|
| Technology |
| Functionality |
| Images |
| Testing |
| Links |


### **Technology**
*   JavaScript
*   HTML
*   CSS
*   Jest
*   Git & GitHub

### **Functionality**
The user types a word in either English or Morse Code and selects the corresponding translate button. The translated word/sentance is then displayed in the output section.  

### **Images**
<img src="/images/Screenshot-translator.png" alt="Image of translator" width="300px">
<img src="/images/Screenshot-morse-to-english.png" alt="Image of translator" width="300px">
<img src="/images/Screenshot-english-to-morse.png" alt="Image of translator" width="300px">


### **Testing**
The translator has been tested using Jest. The tests check that single characters, words and sentances are all correctly translated. Testing between both Morse Code to English and English to Morse Code.

The testing showed an issue with the translate method. The translator added a space before the end of each word that contained the same letter multiple times. This meant that instead of just the dash at the end of the word when translating English to Morse Code, it also had a space. The output was then in the wrong format to be translated back into English. 

The issue was that by checking the index of the letter to determine whether a space should be added, it did not take in to account multiple use of the same letter. The issue was resolved by replacing this with the trim() method.


### **Links**
[GitHub repository](https://github.com/OBuckland/morse-code-translator "Link to GitHub")

[Translator](https://obuckland.github.io/morse-code-translator/ "Link to translator")