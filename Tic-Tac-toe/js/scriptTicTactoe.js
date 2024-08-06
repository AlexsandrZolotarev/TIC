"use strict";

import {getValuesPadding} from './script.js'

let table = document.createElement('table');

let tictactoe = document.getElementById('main_buttons__startId');
table.className = 'tictactoe';


let blockPlayersWithTicTacToe = document.createElement('div');
blockPlayersWithTicTacToe.style = `
    display: flex;
    flex-direction: row;
`;
let player1 = document.createElement('div');
player1.style = `
    width: 100px;
    height: 100px;
    background-color: purple;
`;
let player2 = document.createElement('div');
player2.style = `
    width: 100px;
    height: 100px;
    background-color: yellow;
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

tictactoe.append(blockPlayersWithTicTacToe);
blockPlayersWithTicTacToe.append(player1);
blockPlayersWithTicTacToe.append(table);
blockPlayersWithTicTacToe.append(player2);


let valuesPadding = getValuesPadding(getComputedStyle(tictactoe));

tictactoe.style.padding = `${valuesPadding[0] - 100}px ${valuesPadding[1] - 100}px`
tictactoe.style.marginTop = '2%';