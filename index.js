"use strict";


const scorePlayerOne = document.querySelector(`.score-player1`);
const diceScorePlayerOne = document.querySelector(`.dice-score-player1`);
const scorePlayerTwo = document.querySelector(`.score-player2`);
const diceScorePlayerTwo = document.querySelector(`.dice-score-player2`);
const diceOne = document.querySelector(`.dice-1`);
const diceTwo = document.querySelector(`.dice-2`);
const diceThree = document.querySelector(`.dice-3`);
const diceFour = document.querySelector(`.dice-4`);
const diceFive = document.querySelector(`.dice-5`);
const diceSix = document.querySelector(`.dice-6`);
const diceSeven = document.querySelector(`.dice-7`);
const diceEight = document.querySelector(`.dice-8`);
const diceNine = document.querySelector(`.dice-9`);
const diceTen = document.querySelector(`.dice-10`);
const rollDicePlayerOne = document.querySelector(`.roll-dice-player1`);
const rollDicePlayerTwo = document.querySelector(`.roll-dice-player2`);
const winnerIs = document.querySelector(`.winner`);
const buttonNewGame = document.querySelector(`.new-game`);
const buttonPlayAgain = document.querySelector(`.play-again`);


let q = 0;
let w = 0;
let e = 0;
let r = 0;
let t = 0;

let a = 0;
let s = 0;
let d = 0;
let f = 0;
let g = 0;

rollDicePlayerOne.addEventListener(`click`, () =>{
    setTimeout(() => {

        rollDiceFunctionOne();

    }, 1000);
});

rollDicePlayerTwo.addEventListener(`click`, () =>{
    setTimeout(() => {
        
        rollDiceFunctionTwo();

    }, 1000);
});


const rollDiceFunctionOne = () =>{
    if(diceOne.textContent !== `5` && diceOne.textContent !== `2`){
        diceOne.textContent = Math.trunc(Math.random() * 6) + 1;
            
        if(diceOne.textContent !== `5` && diceOne.textContent !== `2`){
            q = q + Number(diceOne.textContent);
        }
    }
    
    if(diceTwo.textContent !== `5` && diceTwo.textContent !== `2`){
        diceTwo.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceTwo.textContent !== `5` && diceTwo.textContent !== `2`){
            w = w + Number(diceTwo.textContent);
        }
    }
    
    if(diceThree.textContent !== `5` && diceThree.textContent !== `2`){
        diceThree.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceThree.textContent !== `5` && diceThree.textContent !== `2`){
            e = e + Number(diceThree.textContent);
        }
    }
    
    if(diceFour.textContent !== `5` && diceFour.textContent !== `2`){
        diceFour.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceFour.textContent !== `5` && diceFour.textContent !== `2`){
            r = r + Number(diceFour.textContent);
        }
    }
    
    if(diceFive.textContent !== `5` && diceFive.textContent !== `2`){
        diceFive.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceFive.textContent !== `5` && diceFive.textContent !== `2`){
            t = t + Number(diceFive.textContent);
        }
    }
};

const rollDiceFunctionTwo = () =>{
    if(diceSix.textContent !== `5` && diceSix.textContent !== `2`){
        diceSix.textContent = Math.trunc(Math.random() * 6) + 1;
            
        if(diceSix.textContent !== `5` && diceSix.textContent !== `2`){
            a = a + Number(diceSix.textContent);
        }
    }
    
    if(diceSeven.textContent !== `5` && diceSeven.textContent !== `2`){
        diceSeven.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceSeven.textContent !== `5` && diceSeven.textContent !== `2`){
            s = s + Number(diceSeven.textContent);
        }
    }
    
    if(diceEight.textContent !== `5` && diceEight.textContent !== `2`){
        diceEight.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceEight.textContent !== `5` && diceEight.textContent !== `2`){
            d = d + Number(diceEight.textContent);
        }
    }
    
    if(diceNine.textContent !== `5` && diceNine.textContent !== `2`){
        diceNine.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceNine.textContent !== `5` && diceNine.textContent !== `2`){
            f = f + Number(diceNine.textContent);
        }
    }
    
    if(diceTen.textContent !== `5` && diceTen.textContent !== `2`){
        diceTen.textContent = Math.trunc(Math.random() * 6) + 1;
        
        if(diceTen.textContent !== `5` && diceTen.textContent !== `2`){
            g = g + Number(diceTen.textContent);
        }
    }
};