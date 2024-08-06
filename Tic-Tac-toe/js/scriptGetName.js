"use strict";

import {tictactoeButton} from './script.js'

import {addNewSqript} from "./scriptAddNewJsFile.js"

export {players}
class Players
{
    constructor(name)
    {
        this.name = name;
    }

    get name()
    {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
          alert("Имя слишком короткое.");
          return;
        }
        this._name = value;
      }
    winner(value) {
        return this.winnerPlay = value;
    }
}

let blockInputName = document.createElement('div');
blockInputName.style.display = 'flex';

let blockInputNameClock = document.createElement('div');
let img = document.createElement('img');
img.src = './img/alarm64.png';

blockInputNameClock.append(img);

let blockStatusWithInput = document.createElement('div');
blockStatusWithInput.style.display = 'grid';
blockStatusWithInput.style.marginLeft = '50px';

blockStatusWithInput.innerHTML = `
<div class="container">
            <div class="input-group">
              <label class="input-group__label" for="myInput">Status</label>
              <input type="text" id="myInput" class="input-group__input"   
                 placeholder="Enter player1 name" maxlength = '10'>
            </div>
          </div>
`;

blockInputName.append(blockInputNameClock);
blockInputName.append(blockStatusWithInput);

tictactoeButton.prepend(blockInputName);
tictactoeButton.style.paddingTop = '50px';
tictactoeButton.style.transitionDuration = '3s';

let buttonInForm = document.createElement('button');
let input = document.getElementById('myInput');
buttonInForm.innerText = 'Enter';
buttonInForm.style.display = 'none';
buttonInForm.classList.add('form-button');


tictactoeButton.append(buttonInForm);

input.addEventListener('input',function (){

    if(input.value.length > 0) 
    {
        buttonInForm.style= `
        display: block;
        margin-top: 40px`
        tictactoeButton.style.paddingBottom = '13%';
    }
    else buttonInForm.style.display = 'none';
});

let players = new Object();

buttonInForm.addEventListener('click', function () {
    
    if(Object.keys(players).length >= 1) 
    {
        blockInputName.style = '';
        blockStatusWithInput.style = '';
        buttonInForm.style.style = '';
        addNewSqript('scriptTicTacToe');
    }
    players[`player${input.value}`] = (new Players(`${input.value}`));
    input.value = '';
    input.placeholder = 'Enter player2 name';


});

