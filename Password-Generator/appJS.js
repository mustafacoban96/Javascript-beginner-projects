const symbol23 = "@#$%^*()_+|{}[]<>/-*=&~";
const GPassword = document.querySelector('.password-input');
const GBtn = document.querySelector('.generate-button');
const copyImg = document.querySelector('.copy-img');


function generate(){
    let randomstring = Math.random().toString(36).slice(-9);
    var symbolIndex = Math.floor((Math.random()*22)+ 1);
    var passwordIndex = Math.floor((Math.random()*8)+ 1);
    GPassword.value =  randomstring.replace(randomstring[passwordIndex],symbol23[symbolIndex]);
    

}

function copyPassword(){
        GPassword.select();
        navigator.clipboard.writeText(GPassword.value);
    
}

GBtn.addEventListener('click', generate);
copyImg.addEventListener('click', copyPassword);





