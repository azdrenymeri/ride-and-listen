import React from 'react';
import './Video.css'
import Youtube from 'react-youtube';
import { useApplicationStore } from '../../../mobx/Store';
import {observer} from 'mobx-react';


function Video(props: any): any {

    const store = useApplicationStore();

    const opts = {
      height:"100%",
      width: "100%",
      playerVars: {
          controls: 0,
          rel:0,
          disablekb:1,
          modestbranding:1,
          showinfo:0,
          mute:1,
          autoplay:1,
          enablejsapi:1
      } as any
    } 

    const handleChange = (event: any) => {
      if (event.data === 3) {
        event.target.setPlaybackQuality('hd1080');
      }

      if (event.data === 1) {
        store.uiStore.videoContainerReference.classList.remove("Video-hidden")
      } else {
        store.uiStore.videoContainerReference.classList.add("Video-hidden");
      }
    }

    const handleReady = (event: any) => {
      event.target.setPlaybackQuality('hd1080');
      store.uiStore.videoReference = event.target;
      store.uiStore.videoContainerReference = event.target.h.parentElement; 
    }
    

    return (
      <Youtube
        opts={opts}   
        videoId={store.uiStore.selectedVideoId}
        containerClassName="Video-container Video-hidden"
        className="Video-player" 
        onReady = {handleReady}
        onStateChange={handleChange}
        onError={(e) => console.log(e)}  />
      );
}

export default observer(Video);