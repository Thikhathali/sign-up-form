const passwdInput = document.getElementById('pwd');
const passwdConfirmInput = document.getElementById('pwdConfirm');

function refreshPage() {
    window.location = window.location.href;
}

let pwdCheck = function () {
    if(passwdInput.value === passwdConfirmInput.value){
        passwdInput.style.border = '1px solid green';
        passwdConfirmInput.style.border = '1px solid green';
        setInterval('refreshPage', 1000);
        
    } else {
        passwdInput.style.border = '1px solid red';
        passwdConfirmInput.style.border = '1px solid red';
        setInterval('refreshPage()', 60000);
    }
}

passwdInput.addEventListener('keyup', pwdCheck, false);
passwdConfirmInput.addEventListener('keyup', pwdCheck, false);