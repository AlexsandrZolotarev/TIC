

import {players} from './scriptGetName.js'




let tictactoe = document.getElementById('tictactoe');

let statusName = document.getElementById('Status_Name');

// statusName.innerText = `Play ${Object.values(players)[0].name}`;

let moves = false;

let tdTicTacToe = document.querySelectorAll('td');

var target = 0;

let array = [['','',''],['','',''],['','','']];


function includeTdInArray(indx)
{
    if(indx < 3) array[0][indx] = target;
    else if(indx >= 3 && indx < 6) array[1][indx] = target;
    else array[2][indx] = target;
}

tictactoe.addEventListener('mouseover',function(event){

    if(event.target.tagName == 'TD')
    {
        target = event.target;
        target.style =  `background: rgb(107,24,209);`;
        if(moves == false)
        {
            target.className = `cross`;
        }
    }
           
});
tictactoe.addEventListener('click',function(event){

    if(event.target.tagName == 'TD')
    {
        target.className = 'cross';
        includeTdInArray(Array.from(tdTicTacToe).indexOf(target));
    }
           
});

tictactoe.addEventListener('mouseout',function(event){
    if(!array.includes(event.target) && event.target.tagName == 'TD') 
        {
            event.target.style.background =  `white;`;
            event.target.classList.remove(`${event.target.className}`);
        }

    

});

