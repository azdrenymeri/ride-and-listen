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
      if (event.data === 1) {
        event.target.h.parentElement.classList.remove("Video-hidden")
      } else {
        event.target.h.parentElement.classList.add("Video-hidden");
      }
    }

    const handleReady = (event: any) => {
      store.uiStore.videoReference = event.target;
    }
    

    return (<Youtube
      opts={opts}   
      videoId="n1xkO0_lSU0"
      containerClassName="Video-container Video-hidden"
      className="Video-player" 
      onReady = {handleReady}
      onStateChange={handleChange}  />);
}

export default observer(Video);