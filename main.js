'use strict';

const choices = ['rock', 'paper', 'scissors']
let bot;
let human;
let scoreBot = 0;
let scoreHuman = 0;

function game() {
    bot = choices[Math.floor(Math.random() * choices.length)];
    if (human.toUpperCase() === bot.toUpperCase()) {
        console.log(`No one won that round as you both chose the same choice and the current score is ${scoreBot} for the bot and ${scoreHuman} for you`);
    } else if (bot.toUpperCase() == 'ROCK' && human.toUpperCase() == 'SCISSORS' || bot.toUpperCase() == 'SCISSORS' && human.toUpperCase() == 'PAPER' || bot.toUpperCase() == 'PAPER' && human.toUpperCase() == 'ROCK') {
        scoreBot++;
        console.log(`The bot won because ${bot} beats ${human} and the current score is ${scoreBot} for the bot and ${scoreHuman} for you`);
    } else if (human.toUpperCase() == 'ROCK' && bot.toUpperCase() == 'SCISSORS' || human.toUpperCase() == 'SCISSORS' && bot.toUpperCase() == 'PAPER' || human.toUpperCase() == 'PAPER' && bot.toUpperCase() == 'ROCK') {
        scoreHuman++;
        console.log(`You won as ${human} beats ${bot} and the current score is ${scoreBot} for the bot and ${scoreHuman} for you`);
    }
}

for (scoreBot, scoreHuman; scoreHuman < 5 && scoreBot < 5;) {
    human = prompt("Would you like to choose rock or paper or scissors?");
    game();
}

if (scoreBot == 5) {
    console.log("Really you lost to a bot?");
} else {
    console.log("Good job you won against a bot, Now try winning against a real person");
}