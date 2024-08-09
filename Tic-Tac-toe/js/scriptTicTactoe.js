"use strict";

import {getValuesPadding} from './script.js'

<<<<<<< HEAD
import {players} from './scriptGetName.js'
=======
import { players } from './scriptGetName.js'

let table = document.createElement('table');
>>>>>>> 23dc1d42798ba9ccbed0d50232c3cc25954f2efb

import {addNewSqript} from "./scriptAddNewJsFile.js"

<<<<<<< HEAD
function getWrapperPlayers()
{
    let section = document.createElement('section');
        section.className = 'Players';
        section.style = `
            font-family: sans-serif;
            background: white;
            width: 100%;
            display: flex;
            flex-direction: row;
            color: black
            height: 70px;
            margin-top: 5%;
            border-radius: 10px;`;
    let articlePlayer1 = document.createElement('article');
        articlePlayer1.className = 'Players_player1';

    let articlePlayer2 = document.createElement('article');
        articlePlayer2.className = 'Players_player2';

    section.append(articlePlayer1);
    section.append(articlePlayer2);

    // 1 player
    let wrapperIconPlayer1 = document.createElement('div');
        wrapperIconPlayer1.className = 'Wrapper_icon_player1';

    let IconPlayer1 = document.createElement('div');
        IconPlayer1.className = 'Icon_player1';
    wrapperIconPlayer1.append(IconPlayer1);

    let wrapperTextPlayer1 = document.createElement('div');
        wrapperTextPlayer1.className = 'Wpapper_Text1';

    let textPlayer1 = document.createElement('p');
        textPlayer1.innerText = 'PLAYER 1'   

    let textNamePlayer1 = document.createElement('p');
        textNamePlayer1.innerText = `${Object.values(players)[0].name}`
    

    wrapperTextPlayer1.append(textPlayer1);
    wrapperTextPlayer1.append(textNamePlayer1);

    articlePlayer1.append(wrapperIconPlayer1);
    articlePlayer1.append(wrapperTextPlayer1);

    // 2 player

    let wrapperIconPlayer2 = document.createElement('div');
        wrapperIconPlayer2.className = 'Wrapper_icon_player2';

    let IconPlayer2 = document.createElement('div');
        IconPlayer2.className = 'Icon_player2';
    wrapperIconPlayer2.append(IconPlayer2);

    let wrapperTextPlayer2 = document.createElement('div');
        wrapperTextPlayer2.className = 'Wpapper_Text2';

    let textPlayer2 = document.createElement('p');
        textPlayer2.innerText = 'PLAYER 2'   

    let textNamePlayer2 = document.createElement('p');
        textNamePlayer2.innerText = `${Object.values(players)[1].name}`
    

    wrapperTextPlayer2.append(textPlayer2);
    wrapperTextPlayer2.append(textNamePlayer2);

    articlePlayer2.append(wrapperIconPlayer2);
    articlePlayer2.append(wrapperTextPlayer2);    
    
    return section;
}

function getTableElements()
{
    let table = document.createElement('table');
    table.className = 'tictactoe';
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
    return table;
}
function getWrapperStatus()
{
    let section = document.createElement('section');
    section.className = 'WrapperStatus';
    section.style = `
            font-family: sans-serif;
            background: #474346;
            width: 100%;
            display: flex;
            flex-direction: row;
            color: white;
            height: 85px;
            margin-top: 5%;
            border-radius: 10px;
            margin-bottom: 20px;
    `;

    let article = document.createElement('article');
    article.style = `
        display: flex;
        width: 100%;
        height: 100%;
    `;

    let wrapperIconArticle = document.createElement('div');
        wrapperIconArticle.style = `
            width: 30%;
            margin: auto auto;
        `;
    let iconArticle = document.createElement('img');
        iconArticle.src = './img/alarm64.png';
        wrapperIconArticle.append(iconArticle);

    let textArticle = document.createElement('div');
        textArticle.style = `
           text-align: left;
            width: 70%;
        `;

    let text1 = document.createElement('p');
        text1.innerText = 'STATUS';
        text1.style = `
            margin-bottom: 0;
            font-size: 12px;
            letter-spacing: initial;
            font-weight: 800;
            
        `;

    let text2 = document.createElement('p');
    text2.className = 'Status_Name';    
        text2.style = `
            margin-top: 5px;
            font-size: 18px;
            letter-spacing: initial;
        `;
        text2.innerText = `Play ${Object.values(players)[0].name}`;

    textArticle.append(text1);
    textArticle.append(text2);

    article.append(wrapperIconArticle);
    article.append(textArticle);

    section.append(article);
    return section;
}
let tictactoe = document.getElementById('main_buttons__startId');

tictactoe.prepend(getWrapperStatus());
tictactoe.append(getTableElements());
tictactoe.append(getWrapperPlayers());
tictactoe.id = 'tictactoe';
let valuesPadding = getValuesPadding(getComputedStyle(tictactoe));
tictactoe.style.display = 'flex';
tictactoe.style.flexDirection = 'column';
tictactoe.style.padding = `${valuesPadding[0] - 120}px ${valuesPadding[1] - 120}px`
tictactoe.style.marginTop = '2%';

addNewSqript('scriptGame');
=======
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
>>>>>>> 23dc1d42798ba9ccbed0d50232c3cc25954f2efb

