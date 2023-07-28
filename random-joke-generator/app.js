const btn = document.getElementById('btn');
const paragraph = document.getElementById('joke')
let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single';



// xmlhttprequest
function sendReq(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () =>{
        if(req.readyState === 4 && req.status === 200){
            let joke =  JSON.parse(req.responseText)
            addJoke(joke.joke)
        }
    }
        
    req.open('GET',url,true);
    req.send();
}

function addJoke(saka){
    paragraph.innerHTML = saka;
}

btn.addEventListener('click',sendReq);

//



