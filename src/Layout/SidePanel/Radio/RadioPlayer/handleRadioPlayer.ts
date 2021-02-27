export enum navigate {
  PREV,
  NEXT,
}

export const handleTogglePlayPause = (e: any, radioRef: HTMLAudioElement) => {
  if (!radioRef.paused) {
    radioRef.pause();
  } else {
    radioRef.play();
  }
};

export const handleVolumeDown = (e: any, radioRef: HTMLAudioElement) => {
  let currentVol = radioRef.volume;
  currentVol -= 0.1;

  if (currentVol >= 0) {
    radioRef.volume = currentVol;
  } else {
    radioRef.volume = 0;
  }
};

export const handleVolumeUp = (e: any, radioRef: HTMLAudioElement) => {
  let currentVol = radioRef.volume;
  currentVol += 0.1;

  if (currentVol <= 1) {
    radioRef.volume = currentVol;
  } else {
    radioRef.volume = 1;
  }
};

export const handleStationChange = (
  e: any,
  radioRef: HTMLAudioElement,
  store: any,
  navigation: navigate
) => {
  
  let radioObj;
  let selectedCity = store.uiStore.selectedCity;
  const stationArr = store.cityStore.getCityRadiStations(selectedCity);
  if (stationArr.length <= 0) {
    return;
  }
  let pos = store.uiStore.radioChannelPosition;
  console.log(`Pos: ${pos}`);
  
  navigation === navigate.NEXT ? pos += 1 : pos -= 1;
  

  if (pos >= 0 && pos < stationArr.length) {
    
    radioObj = stationArr[pos];
    radioRef.pause();

    radioRef.setAttribute("src", radioObj.streamUrl);
    store.uiStore.selectedRadio = radioObj.name;
    radioRef.play().then().catch((err) => {});
    store.uiStore.radioChannelPosition = pos;
  } else if (pos < 0) {
    
    radioObj = stationArr[0];
    radioRef.pause();

    radioRef.setAttribute("src", radioObj.streamUrl);
    store.uiStore.selectedRadio = radioObj.name;
    radioRef.play().then().catch((err) => {});
    store.uiStore.radioChannelPosition = pos;
  } else {
    // means out of array bounds
    radioObj = stationArr[stationArr.length-1];
    radioRef.pause();

    radioRef.setAttribute("src", radioObj.streamUrl);
    store.uiStore.selectedRadio = radioObj.name;
    radioRef.play().then().catch((err) => {});
    // store.uiStore.radioChannelPosition = pos;
  }
  // finally update the state on mobx for the current position
  
};
