"use strict";

import {getValuesPadding} from './script.js'

let table = document.createElement('table');

let tictactoe = document.getElementById('main_buttons__startId');
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
tictactoe.append(table);
let valuesPadding = getValuesPadding(getComputedStyle(tictactoe));

tictactoe.style.padding = `${valuesPadding[0] - 100}px ${valuesPadding[1] - 100}px`
tictactoe.style.marginTop = '2%';