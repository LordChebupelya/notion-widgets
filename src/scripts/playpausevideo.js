Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

let video = document.querySelector('#showcaseVideo1');
let btn = document.querySelector('#playpausebtn');
let btnIcon = document.querySelector('#playpauseicon');

function playPause(elem, btnElem) {
  if (elem.playing) {
    elem.pause();
    btnElem.classList.add('ti-player-play');
    btnElem.classList.remove('ti-player-pause');
  } else if (!elem.playing) {
    elem.play();
    btnElem.classList.add('ti-player-pause');
    btnElem.classList.remove('ti-player-play');
  }
}

btn.addEventListener('click', () => playPause(video, btnIcon));
