"use strict";

import {getValuesPadding} from './script.js'

import { players } from './scriptGetName.js'

let table = document.createElement('table');

let tictactoe = document.getElementById('main_buttons__startId');
table.className = 'tictactoe';

let blockPlayer1 = document.createElement('div');
blockPlayer1.style = `
    width: 100px;
    height: 100px;
    background: purple;  
`;
let blockPlayer2 = document.createElement('div');
blockPlayer2.style = `
    width: 100px;
    height: 100px;
    background: purple;  
`;

let blockPlayersWithTicTacToe = document.createElement('div');
blockPlayersWithTicTacToe.style = `
    display: flex;s
    flex-direction: row;
`;

for(let i = 0; i < 3;i++)
{
    let tr = document.createElement('tr');
    
    for(let j = 0; j < 3;j++)
    {
        let td = document.createElement('td');        
        tr.append(td);
    }
    table.append(tr);
}
tictactoe.append(blockPlayer1);
tictactoe.append(table);
tictactoe.append(blockPlayer2);
let valuesPadding = getValuesPadding(getComputedStyle(tictactoe));

tictactoe.style.padding = `${valuesPadding[0] - 100}px ${valuesPadding[1] - 100}px`
tictactoe.style.marginTop = '2%';