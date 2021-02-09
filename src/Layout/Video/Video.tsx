import React from 'react';
import './Video.css'


export default function Video(props: any): any {

  let source = "https://www.youtube-nocookie.com/embed/7HaJArMDKgI"
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
        onLoad={(e: any) => setupVideo(e)}
      ></iframe>
    </div>);
}


function setupVideo(e: any) {
  // - 1.78 is the aspect ratio of the video
  // - This will work if your video is 1920 x 1080
  // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
  const iframe: HTMLIFrameElement = document.getElementById('vplayer') as HTMLIFrameElement;
  // const videoPlayer = iframe.contentWindow?.document.querySelector(".video-stream.html5-main-video") as HTMLElement;

  // videoPlayer.style.position = 'fixed';
  // videoPlayer.style.zIndex = '-99999';
  // videoPlayer.style.userSelect = 'none';
  // videoPlayer.style.width = '100% !important';
  // videoPlayer.style.height = '100%';
  // videoPlayer.style.transform = 'scale(2,3)'
  // var aspectRatio = 1.78; 
  //   var video:HTMLDivElement = document.querySelector("#vid-container") as HTMLDivElement
  //   var videoHeight = video.clientHeight;
  //   var videoWidth = video.clientWidth;
  //   console.log(`videoHeight: ${videoHeight}, width: ${videoWidth}`)
  //   // var aspectRatio = parseFloat(parseFloat(`${videoHeight/videoWidth}`).toFixed(3))
  //   console.log(`Aspect ration ${aspectRatio}`)
  //   var newWidth = videoHeight*aspectRatio;
  // 	var halfNewWidth = newWidth/2;

  // //Define the new width and centrally align the iframe
  // // video.styles({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
  // video.style.width = newWidth+"px";
  // // video.style.left = "50%"
  // // video.style.right = "50%"
  // video.style.marginLeft = "-"+halfNewWidth+"px"
}