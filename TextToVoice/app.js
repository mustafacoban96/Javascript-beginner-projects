const listenBtn = document.getElementById('listen-btn');
const textArea = document.getElementById('text-area');

let utterance = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[0];
    voices.forEach((voice,i) =>(voiceSelect.options[i]= new Option(voice.name , i)));
}

voiceSelect.addEventListener("change", ()=>{
    utterance.voice = voices[voiceSelect.value]
})


listenBtn.addEventListener('click',function(){
    if ('speechSynthesis' in window) {
        utterance.text = textArea.value;
        speechSynthesis.speak(utterance);
      }else{
        console.log(' Speech Synthesis Not Supported 😞'); 
      }
})