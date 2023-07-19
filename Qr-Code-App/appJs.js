let ImgArea = document.querySelector('.qr-image');
let inpArea = document.getElementById('url-text-input');
const GBtn = document.getElementById('generate-btn');
const delBtn = document.getElementById('delete-qr');
const imageRow = document.getElementById('image-row')
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

console.log(imageRow)

function urlConcat(){
    
    if(inpArea.value.length > 0){
        ImgArea.style.display = "block"
        ImgArea.src = url + inpArea.value;
    }
    else{
        const error = document.createElement("p");
        error.innerHTML = "Please Enter text or Url";
        error.classList.add('error');
        ImgArea.style.display = 'none';
        imageRow.appendChild(error)
        setTimeout(function(){error.remove()},2000)
       
        

    }
    
}
//"[animation_name] [Duration] [TimingFunction] [Delay] [IterationCount] [Direction] [fillMode] [playState]";

function deleteUrl(){
    ImgArea.style.display = 'none'
}

delBtn.addEventListener('click',deleteUrl)


GBtn.addEventListener('click' , function(){
    urlConcat();
    ImgArea.style.animation = 'qr-area 3s';
    inpArea.value = "";
    
})


