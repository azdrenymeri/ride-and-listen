import React, {useEffect} from 'react';
import './Video.css'


export default function Video(props: any): any {
  useEffect(setupVideo,[]);
  
  let source =  "https://www.youtube-nocookie.com/embed/7HaJArMDKgI"
  + "?controls=0&rel=0&disablekb=1&modestbranding=1&showinfo=0&mute=1"
  + "&autoplay=1&enablejsapi=1"
  return (
  <div id="vid-container" className="Video-container">
  <iframe
    className="Video-player"
    aria-disabled="true"
    id="vplayer"
    width="100%" 
    height="100%" 
    src={source}
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
    allowFullScreen
    ></iframe>
  </div>);
}


function setupVideo(){
  // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78

  // var aspectRatio = 1.78; 
    var video:HTMLDivElement = document.querySelector("#vid-container") as HTMLDivElement
    var videoHeight = video.clientHeight;
    var videoWidth = video.clientWidth;
    console.log(`videoHeight: ${videoHeight}, width: ${videoWidth}`)
    var aspectRatio = parseFloat(parseFloat(`${videoHeight/videoWidth}`).toFixed(3))
    console.log(`Aspect ration ${aspectRatio}`)
    var newWidth = videoHeight*aspectRatio;
		var halfNewWidth = newWidth/4;
    
  //Define the new width and centrally align the iframe
  // video.styles({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
  // video.style.width = newWidth+"px";
  // video.style.left = "50%"
  // video.style.marginLeft = "-"+halfNewWidth+"px"
  // const cw: HTMLIFrameElement = document.getElementById('vplayer') as HTMLIFrameElement;
}