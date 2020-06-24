const video = document.getElementsByClassName("video");
const play = document.getElementsByClassName("btnPlay");
const stop = document.getElementsByClassName("btnStop");
const pause = document.getElementsByClassName("btnPause");
const progress = document.getElementsByClassName("progress");
const timestamp = document.getElementsByClassName("timestamp");



function playPauseVid(vidEl, playEl) {
    if (vidEl.paused) {
        vidEl.play();
        playEl.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
    } else {
        vidEl.pause();
        playEl.innerHTML = "<i class='fa fa-play fa-3x'></i>";
    }
}

function updateProgress(vidEl, progressEl, timestampEl) {
    //debugger
    progressEl.value = (vidEl.currentTime / vidEl.duration) * 100;

    let min = Math.floor(vidEl.currentTime / 60);
    if (min < 10) {
        min = '0' + String(min);
    }
    let sec = Math.floor(vidEl.currentTime % 60);
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    timestampEl.innerHTML = `${min}:${sec}`;
}

function setVideoProgress(vidEl, progressEl) {
    vidEl.currentTime = (+progressEl.value * vidEl.duration) / 100;
}

function stopVideo(vidEl) {
    vidEl.currentTime = 0;
    vidEl.pause();
}


//loop to iterate through the classes & event listeners
var i;
for (i = 0; i < video.length; i++) {
    const el = video[i];
    const container = el.parentElement;
    const vidEl = container.querySelector(".video");
    const playEl = container.querySelector(".btnPlay");
    const stopEl = container.querySelector(".btnStop");
    const progressEl = container.querySelector(".progress");
    const timestampEl = container.querySelector(".timestamp");

    vidEl.addEventListener("click", () => {
        playPauseVid(vidEl, playEl);
    });

    vidEl.addEventListener("timeupdate", () => {
        debugger
        updateProgress(vidEl, progressEl, timestampEl);
    });

    playEl.addEventListener("click", () => {
        playPauseVid(vidEl, playEl);
    });

    stopEl.addEventListener("click", () => {
        stopVideo(vidEl);
    });

    progressEl.addEventListener("change", () => {
        setVideoProgress(vidEl, progressEl);
    });
}
