module.exports.WORDS = require("./words.json");

module.exports.randomWord = () => this.WORDS[Math.floor(Math.random() * this.WORDS.length)];