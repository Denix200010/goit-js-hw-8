import Player from "@vimeo/player";

import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
    
    const iframePlayer = new Vimeo.Player(iframe);
    const SAVE_TIME = "videoplayer-current-time";

    const onPlay = function (data) {
    localStorage.setItem(SAVE_TIME, JSON.stringify(data));
    };
iframePlayer.on('timeupdate', throttle(onPlay, 1000));
resume();
    
function resume() {
  if (JSON.parse(localStorage.getItem(SAVE_TIME)) === null) {
    return;
  }
  const time = JSON.parse(localStorage.getItem(SAVE_TIME))['seconds'];
  if (time) {
    iframePlayer
      .setCurrentTime(time)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;
          default:
            break;
        }
      });
  }
}
