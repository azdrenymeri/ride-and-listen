

export const handleVideoChange = (e: any, videoRef: any, store: any) => {
  let selectedCity = store.uiStore.selectedCity;
  const videoArr = store.cityStore.getcityVideos(selectedCity);
  const randomIndex = getRandomInt(0, videoArr.length-1);

  const randomVidObj = videoArr[randomIndex];

  console.log(randomVidObj);
  videoRef.h.parentElement.classList.add("Video-hidden");
  videoRef.pauseVideo();
  videoRef.loadVideoById(randomVidObj.video_url);
  videoRef.playVideo();
  // videoRef.contr
  console.log("inside video reference");
}


function getRandomInt(min: number, max:  number) : number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}