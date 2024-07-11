const FPInput = document.getElementById('FPInput');
const formFP = document.getElementById('formFP');
const enterUserId = document.getElementById('enterUserId');
const checkCode = document.getElementById('checkCode');
const inputCode = document.getElementById('inputCode');
const formCheckCode = document.getElementById('formCheckCode');
const newPassword = document.getElementById('newPassword');
const inputNewPassword = document.getElementById('inputNewPassword');
const inputNewPassword1 = document.getElementById('inputNewPassword1');

function onInputChange() {
    if (!FPInput.value) {
        document.getElementById('btn-next').style.background = 'rgba(208, 210, 213, 1)';
    }
    else {
        document.getElementById('btn-next').style.background = 'red';

    }
}
formFP.addEventListener('submit', function (e) {
    e.preventDefault();
    if (document.getElementById('btn-next').style.background === 'red') {
        enterUserId.style.display = 'none';
        checkCode.style.display = '';
    }
});
function onInputCodeChange() {
    if (!inputCode.value) {
        document.getElementById('btn-next-2').style.background = 'rgba(208, 210, 213, 1)';
    }
    else {
        document.getElementById('btn-next-2').style.background = 'red';
    }
}
formCheckCode.addEventListener('submit', function (e) {
    e.preventDefault();
    if (document.getElementById('btn-next-2').style.background === 'red') {
        checkCode.style.display = 'none';
        newPassword.style.display = '';
    }
});
function onchangeInputNP() {
    if (!inputNewPassword.value ||!inputNewPassword1.value) {
        document.getElementById('btn-confirm').style.background = 'rgba(208, 210, 213, 1)';
    }
    else {
        document.getElementById('btn-confirm').style.background = 'red';
    }
}