let track = document.getElementById('track');
let controlBtn = document.getElementById('play-pause');
let progress = document.getElementById('progress');

console.log(track.children)


track.onloadedmetadata = function(){
    progress.max = track.duration;
    progress.value = track.currentTime;
    //console.log(Number(progress.max / 60).toFixed(2));
}

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    }
}

if(track.play()){
    setInterval(()=>{
        progress.value = track.currentTime;
    },0.001)
}

progress.onchange = function(){
    track.play();
    track.currentTime = progress.value;
    controlBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>'
}




controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
    controlBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
});


