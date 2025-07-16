const msg = document.getElementById('message');
const para = document.querySelector('p');
const submit = document.querySelector('#submit');
let text = "";

para.style.whiteSpace = "pre-wrap";
msg.addEventListener('keydown', event => {
    event.preventDefault();
    text += `Keydown: [key=${event.key}, code=${event.code}]\n`;
    para.textContent = text; 
});

//deprecated
/*
msg.addEventListener('keypress', event => {
    text += `Keypress: [key=${event.key}, code=${event.code}]\n`;
    para.textContent = text; 
});
*/

msg.addEventListener('keyup', event => {
    event.preventDefault();
    text += `Keyup: [key=${event.key}, code=${event.code}]\n`;
    para.textContent = text; 
});

submit.addEventListener('click', event => {
    event.preventDefault();
});

submit.addEventListener('contextmenu', event => {
    event.preventDefault();
});

submit.addEventListener('mouseup', event => {
    switch(event.button){
        case 0:
            text += 'Left mouse button clicked.\n';
            para.textContent = text;
            break;
        case 1:
            text += 'Middle mouse button clicked.\n';
            para.textContent = text;
            break;
        case 2:
            text += 'Right mouse button clicked.\n';
            para.textContent = text;
            break;
        default:
            text += `Unknown mouse button code: ${event.button}\n`;
            para.textContent = text;
    }
});




