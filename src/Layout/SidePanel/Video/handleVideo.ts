
export const handleVideoChange = (e: any, videoRef: any, store: any) => {
  // hide the video container 
  store.uiStore.showYoutubeIframe = false;
  let selectedCity = store.uiStore.selectedCity;
  

  const videoArr = store.cityStore.getcityVideos(selectedCity);
  
  if(videoArr.length <= 0){
    return;
  }
  
  const randomIndex = getRandomInt(0, videoArr.length);
  const randomVidObj = videoArr[randomIndex];
  console.log(randomVidObj);
  
  store.uiStore.selectedVideoId = randomVidObj.video_url;

  // show the video container now 
  store.uiStore.showYoutubeIframe = true;
}

function getRandomInt(min: number, max:  number) : number {
  min = Math.ceil(min);
  max = Math.floor( max);
  return Math.floor(Math.random() * (max - min) + min);
}