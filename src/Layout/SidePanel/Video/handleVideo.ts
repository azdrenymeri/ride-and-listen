

export const handleVideoChange = (e: any, videoRef: any, store: any) => {
  let selectedCity = store.uiStore.selectedCity;
  const videoArr = store.cityStore.getcityVideos(selectedCity);
  if(videoArr.length <= 0){
    return;
  }

  const randomIndex = getRandomInt(0, videoArr.length);
  const randomVidObj = videoArr[randomIndex];
  store.uiStore.selectedVideoId = randomVidObj.video_url;

}


function getRandomInt(min: number, max:  number) : number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}