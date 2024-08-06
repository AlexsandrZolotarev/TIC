"use strict";

import {addNewSqript} from "./scriptAddNewJsFile.js"

export {getValuesPadding} 
export {tictactoeButton,styleTictactoeButton} 

function getValuesPadding(value)
{
    return value.padding.split('px').map((item) => +item);
}

let tictactoeButton = document.getElementById('main_buttons__startId');
let styleTictactoeButton = getComputedStyle(tictactoeButton);
let valuesPadding = getValuesPadding(styleTictactoeButton);

let one_call = false;

tictactoeButton.addEventListener('click',() => {

    if(one_call == false)
    {
        valuesPadding[1] = 0;
        valuesPadding[0] = 0;
        tictactoeButton.innerHTML = ''; 
        let interval = setInterval(() =>
        {
            if(valuesPadding[0] > 20  && valuesPadding[1] > 20 ) 
            {
                one_call = true;
                addNewSqript('scriptGetName');
                clearInterval(interval);
            } 
            tictactoeButton.style.padding = `${valuesPadding[0]}% ${valuesPadding[1]}%`;
            valuesPadding[0] += 0.1;
            valuesPadding[1] += 0.1;
        },7);
    }
    

} , true);

// tictactoe.addEventListener("blur", () => {
    
//     let interval = setInterval(() =>
//         {
//             if(valuesPadding[0] < 10) 
//                 {
//                     tictactoe.innerHTML = 'Start'; 
//                     clearInterval(interval); 
//                 }
//             tictactoe.style.padding = `${valuesPadding[0]}px ${valuesPadding[1]}px`;
//             valuesPadding[0] -= 0.5;
//             valuesPadding[1] -= 0.5;
//         },7);
// }, true);
