'use strict';

// brings in the assert module for unit testing
//const assert = require('assert');
// brings in the readline module to access the command line
//const readline = require('readline');
// use the readline module to print out to the command line
//const rl = readline.createInterface({
//input: process.stdin,
//output: process.stdout
//});



const pigLatin = (word) => {
  // Your code here
  const myVowels = ['a', 'e', 'i', 'o', 'u']
  word = word.toLowerCase().trim();
  for (let i = 0; i < word.length; i++) {
    if (myVowels.includes(word[0])) {
      return word + 'yay'
    }
    else if (myVowels.includes(word[1])) {
      let simpleWord = word.substring(1);
      let firstLetter = word[0];
      return simpleWord + firstLetter + 'ay'
    }
    else (myVowels.includes(word[2])); {
      let complexWord = word.substring(2);
      let firstLetter = word[0];
      let secondLetter = word[1];
      return complexWord + firstLetter + secondLetter + 'ay'
    }
  }
}
//variable to store input
let input = '';

//variables that reference elements in the DOM
const  textInput = document.getElementById('textInput')
const button = document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')
const pigButton = document.getElementById('pigButton')
console.log()

//console.log(textInput) and event handlers
textInput.addEventListener('keyup', (event) => {
  input= event.target.value
  console.log(input)
})
button.addEventListener('click', (event) =>{
  let words = input.split(' ')
  let pigWord= words.map(word => pigLatin(word)).join(' ')
  textOutput.innerText = pigWord
} )
reset.addEventListener('click', (event) =>{
  textInput.value = '';
  textOutput.innerText='';
  input='';
  console.log('click')
} )

//unecessary extras
//pigButton.addEventListener('mousedown', (event) => {
  //pigButton.classList.remove('pigButton')
//})




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
//const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log(pigLatin(answer));
//     getPrompt();
//   });
// }

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  // getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
