
const storeObj = () => ({
    videoControls: {
      showVideo: true,
      sounds: false
    },
    videoPlayer: null, // this is the youtube iframe api video player instance
    radioPlayer: null, // this is the radio player instance currently playing
});


export default storeObj;