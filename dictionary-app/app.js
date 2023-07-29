const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const word = document.getElementById('inp-word');
const searchBtn = document.getElementById('search-btn');
const wordTitle = document.getElementById('word-title');
const soundBtn = document.getElementById('sound-btn');
const partOfSpeech = document.getElementById('part-of-speech');
const pronunciation = document.getElementById('pronunciation');
const meaning = document.querySelector('.word-meaning');
const example = document.querySelector('.word-example');
const wordSound = document.querySelector('#word-sound');







let request = (word) =>{
    return new Promise((resolve,reject) =>{
        let xhr = new XMLHttpRequest();

        xhr.open('GET' , url+word);
        xhr.onload = ()=>{
            if(xhr.status >=200 && xhr.status<300){
                resolve(xhr.response)
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}



function place(...datas){
    example.innerHTML = '';
    meaning.innerHTML = '';
    wordTitle.innerHTML = datas[0].word;
    partOfSpeech.innerHTML = datas[0].meanings[0].partOfSpeech;
    pronunciation.innerHTML = datas[0].phonetic;
    datas[0].meanings[0].definitions.forEach(element => {
      meaning.innerHTML += element.definition + "<br>"; 
    })
    datas[0].meanings[0].synonyms.forEach(element => {
        example.innerHTML += element + "<br>"; 
      })
    
    
}

function soundPlay(voice){
    wordSound.src = "";
    if(voice != null){
        wordSound.src = voice;
    }
}


searchBtn.addEventListener('click', ()=>{
    request(word.value)
    .then((data) =>{
        let result =JSON.parse(data);
        console.log(result);
        place(...result);
        var voice = result[0].phonetics[0].audio;
        soundPlay(voice);
        
    })
    .catch((err)=>{
        console.log('promise rejected: ' + err);
    })

})


soundBtn.addEventListener('click',()=>{
            
    wordSound.play();
})

