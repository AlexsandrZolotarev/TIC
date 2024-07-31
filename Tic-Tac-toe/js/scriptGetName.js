"use strict";

import {tictactoeButton,styleTictactoeButton} from './script.js'


let blockInputName = document.createElement('div');
blockInputName.style.display = 'flex';

let blockInputNameClock = document.createElement('div');
let img = document.createElement('img');
img.src = './img/alarm64.png';
// img.srcset = `
//     alarm16.png 16w,
//     alarm24.png 24w,
//     alarm32.png 32w,
//     alarm64.png 64w`;
// img.sizes=`
//       (max-width: 16px) 16px,
//       (max-width: 24px) 24px,
//       (max-width: 32px) 32px,
//       (max-width: 64px) 64px,`;

blockInputNameClock.append(img);

let blockStatusWithInput = document.createElement('div');
blockStatusWithInput.style.display = 'grid';


let blockInputNameStatus = document.createElement('div');
blockInputNameStatus.innerHTML = 'Status';

let blockInputNameInput = document.createElement('div');
let input = document.createElement('input');
input.style.height = '20px';
input.style.type = 'text';
input.style.placeholder = 'Enter FirstName';
blockInputNameInput.append(input);

blockStatusWithInput.append(blockInputNameStatus);
blockStatusWithInput.append(blockInputNameInput);

blockInputName.append(blockInputNameClock);
blockInputName.append(blockStatusWithInput);

tictactoeButton.prepend(blockInputName);