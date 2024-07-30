"use strict";


function getValuesPadding(value)
{
    return value.padding.split('px').map((item) => +item)
}
export {getValuesPadding} 
function addNewSqript()
{
    let script = document.createElement('script');
    script.type = 'module';
    script.setAttribute('src','/js/scriptTicTactoe.js');
    document.body.appendChild(script);
}



let tictactoe = document.getElementById('main_buttons__startId');
let styleTictactoe = getComputedStyle(tictactoe);
let valuesPadding = getValuesPadding(styleTictactoe);

tictactoe.addEventListener('focus',() => {
    tictactoe.innerHTML = ''; 
    let interval = setInterval(() =>
        {
            if(valuesPadding[0] > 200) 
            {
                addNewSqript();
                clearInterval(interval);
            } 
            tictactoe.style.padding = `${valuesPadding[0]}px ${valuesPadding[1]}px`;
            valuesPadding[0] += 0.7;
            valuesPadding[1] += 0.7;
        },7);

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
