import Player from "@vimeo/player";
console.log("Player", Player)


import throttle from "lodash.throttle";
    
const iframe = document.querySelector('iframe');
    
    const iframePlayer = new Vimeo.Player(iframe);
    const SAVE_TIMES = "videoplayer-current-time";

//     const onPlay = function (data) {
//   const stringifyData = JSON.stringify(data);
//   localStorage.setItem(SAVE_TIMES, stringifyData);
//     };
