
export const handleTogglePlayPause = (e: any, radioRef: HTMLAudioElement) => {
  if (!radioRef.paused) {
    radioRef.pause();
  } else {
    radioRef.play();
  }
}

export const handleVolumeDown = (e: any, radioRef: HTMLAudioElement) => {
  let currentVol = radioRef.volume;
  currentVol -= 0.1;

  if(currentVol >= 0) {
    radioRef.volume = currentVol;
  } else {
    radioRef.volume = 0;
  }
}

export const handleVolumeUp = (e:any, radioRef: HTMLAudioElement) => {
  let currentVol = radioRef.volume;
  currentVol += 0.1;

  if (currentVol <= 1) {
    radioRef.volume = currentVol;
  } else {
    radioRef.volume = 1;
  }
}