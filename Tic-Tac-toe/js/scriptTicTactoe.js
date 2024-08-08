"use strict";

import {getValuesPadding} from './script.js'

import {players} from './scriptGetName.js'


let table = document.createElement('table');

let tictactoe = document.getElementById('main_buttons__startId');
table.className = 'tictactoe';

let objectWrapperPlayers = {
    section: document.createElement('section'),
    wrapperIcon: document.createElement('article'),
    iconCross: document.createElement('div'),
    wrapperText : document.createElement('article'),
    text1: document.createElement('p'),
    text2 : document.createElement('p'),
}
function getWrapperPlayers(player)
{
    let section = document.createElement('section');
    section.style.display = 'flex';
    section.style.flexDirection = 'row';
    let wrapperIcon = document.createElement('article');
    wrapperIcon.style = `
        width: 50px;
        height: 50px;
    `;
    let iconCross = document.createElement('div');
    wrapperIcon.append(iconCross);

    let wrapperText = document.createElement('article');
    section.append(wrapperIcon);
    section.append(wrapperText);

    let text1 = document.createElement('p');
    let text2 = document.createElement('p');
    wrapperText.append(text1);
    wrapperText.append(text2);

    if(player == 'player1') {
        text1.innerHTML = `PLAYER1`;
        wrapperIcon.style.background = `purple`;
        iconCross.style = `
               position: absolute;
                width: 24px;
                height: 24px;
                cursor: pointer;`;

        iconCross.className = 'iconCrossPlayer1';
        text2.innerHTML = `${Object.values(players)[0].name}`;

    }
    else{
        text1.innerHTML = `PLAYER2`;
        wrapperIcon.style.background = `yellow`;
        
        iconCross.style = `
            height: 100px;
            width: 100px;
            background-color: #FA6900;
            border-radius: 5px;
            position: relative;`;

        iconCross.className = 'iconCrossPlayer2';
        text2.innerHTML = `${Object.values(players)[1].name}`;        
    }

    return section;
}

function fillTableElements()
{
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
}
fillTableElements();

tictactoe.append(getWrapperPlayers('player1'));
tictactoe.append(table);
tictactoe.append(getWrapperPlayers('player2'));

let valuesPadding = getValuesPadding(getComputedStyle(tictactoe));
tictactoe.style.display = 'flex';
tictactoe.style.flexDirection = 'row';
tictactoe.style.padding = `${valuesPadding[0] - 100}px ${valuesPadding[1] - 100}px`
tictactoe.style.marginTop = '2%';