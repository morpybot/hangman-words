# [@morpy/hangmanwords](https://github.com/morpybot/hangman-words)

This Node.js module is used to store a list of french words that can be used to pick a word for hangman game, or for any other use case.

## Installation

To install `@morpy/hangmanwords` in your Node.js application, run this command in a terminal :

```
npm install git+https://github.com/morpybot/hangman-words.git
```

## Usage

```js
const hangmanWords = require("@morpy/hangmanwords");

// The property 'WORDS' contains the list of all referenced words
const words = hangmanWords.WORDS;

// The function 'randomWord' picks randomly a word in the word list
const someWord = hangmanWords.randomWord();
```

You can also import it using ES6 desctructuration :
```js
const { WORDS, randomWord } = require("@morpy/hangmanwords");
```