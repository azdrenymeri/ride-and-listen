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
      if(event.data === 1) {
        event.target.setPlaybackQuality('highres')
      }
      if (event.data === 1) {
        store.uiStore.videoContainerReference.classList.remove("Video-hidden")
      } else {
        store.uiStore.videoContainerReference.classList.add("Video-show");
      }
    }

    const handleReady = (event: any) => {
      event.target.setPlaybackQuality('highres');
      store.uiStore.videoReference = event.target;
      store.uiStore.videoContainerReference = event.target.h.parentElement; 
    }

    const handleQuality = (event: any) => {
      event.target.setPlaybackQuality('highres')
    }
    

    return (
      <Youtube
        opts={opts}   
        videoId={store.uiStore.selectedVideoId}
        containerClassName="Video-container Video-hidden"
        className="Video-player" 
        onReady = {handleReady}
        onStateChange={handleChange}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(e) => handleQuality(e) }  />);
}

export default observer(Video);