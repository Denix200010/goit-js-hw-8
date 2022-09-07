import Player from "@vimeo/player";
console.log("Player", Player)
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const SAVE_TIME = "videoplayer-current-time";

    const onPlay = function (data) {
    localStorage.setItem(SAVE_TIME, JSON.stringify(data['seconds']));
    };
player.on('timeupdate', throttle(onPlay, 1000));
resume();
    
function resume() {
  if (JSON.parse(localStorage.getItem(SAVE_TIME)) === null) {
    return;
  }
  const time = JSON.parse(localStorage.getItem(SAVE_TIME));
  if (time) {
    player
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
