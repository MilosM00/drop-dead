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

let p = 0;
let n = 0;

let playingOne = true;
let playingTwo = true;
let clickAgain = true;


rollDicePlayerOne.addEventListener(`click`, () =>{
    setTimeout(() => {

        if(playingOne === true){
            rollDiceFunctionOne();
            isPlayingOne();
        }

        if(clickAgain === true){
            selectWinner();
        }

    }, 500);
});

rollDicePlayerTwo.addEventListener(`click`, () =>{
    setTimeout(() => {

        if(playingTwo === true){
            rollDiceFunctionTwo();
            isPlayingTwo();
        }

        if(clickAgain === true){
            selectWinner();
        }

    }, 500);
});

buttonPlayAgain.addEventListener(`click`, () =>{
    q = w = e = r = t = a = s = d = f = g = 0;
    winnerIs.textContent = `Who will win?`;
    diceScorePlayerOne.textContent = `0`;
    diceScorePlayerTwo.textContent = `0`;
    playingOne = true;
    playingTwo = true;
    clickAgain = true;
    resetDice();
});

buttonNewGame.addEventListener(`click`, () =>{
    q = w = e = r = t = a = s = d = f = g = n = p = 0;
    winnerIs.textContent = `Who will win?`;
    diceScorePlayerOne.textContent = `0`;
    diceScorePlayerTwo.textContent = `0`;
    scorePlayerOne.textContent = `0`;
    scorePlayerTwo.textContent = `0`;
    playingOne = true;
    playingTwo = true;
    clickAgain = true;
    resetDice();
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

    diceScorePlayerOne.textContent = q + w + e + r + t;

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

    diceScorePlayerTwo.textContent = a + s + d + f + g;
};

const selectWinner = () =>{
    if(playingOne === false && playingTwo === false){
        if(Number(diceScorePlayerOne.textContent) > Number(diceScorePlayerTwo.textContent)){
            winnerIs.textContent = `Player 1 wins!`;
            p++;
            scorePlayerOne.textContent = p;
        }

        else if(Number(diceScorePlayerTwo.textContent) > Number(diceScorePlayerOne.textContent)){
            winnerIs.textContent = `Player 2 wins!`;
            n++;
            scorePlayerTwo.textContent = n;
        }

        else{
            winnerIs.textContent = `It's a draw!`;
        }

        clickAgain = false;
    }
};

const isPlayingOne = () =>{
    if(diceOne.textContent === `5` || diceOne.textContent === `2`){
        if(diceTwo.textContent === `5` || diceTwo.textContent === `2`){
            if(diceThree.textContent === `5` || diceThree.textContent === `2`){
                if(diceFour.textContent === `5` || diceFour.textContent === `2`){
                    if(diceFive.textContent === `5` || diceFive.textContent === `2`){
                        playingOne = false;
                    }
                }
            }
        }
    }
};

const isPlayingTwo = () =>{
    if(diceSix.textContent === `5` || diceSix.textContent === `2`){
        if(diceSeven.textContent === `5` || diceSeven.textContent === `2`){
            if(diceEight.textContent === `5` || diceEight.textContent === `2`){
                if(diceNine.textContent === `5` || diceNine.textContent === `2`){
                    if(diceTen.textContent === `5` || diceTen.textContent === `2`){
                        playingTwo = false;
                    }
                }
            }
        }
    }
};

const resetDice = () =>{
    diceOne.textContent = `◆`;
    diceTwo.textContent = `◆`;
    diceThree.textContent = `◆`;
    diceFour.textContent = `◆`;
    diceFive.textContent = `◆`;

    diceSix.textContent = `◆`;
    diceSeven.textContent = `◆`;
    diceEight.textContent = `◆`;
    diceNine.textContent = `◆`;
    diceTen.textContent = `◆`;
};