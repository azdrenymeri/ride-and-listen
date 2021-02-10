import React from 'react';
import './VideoControls.css';
import { useObserver } from 'mobx-react';
import { useApplicationStore } from '../../../mobx/Store';

export default function VideoControls() {

  const store = useApplicationStore();

  const handleVideoToggle = (event: any, store: any) => {
      store.videoControls.showVideo = !store.videoControls.showVideo;
  }

  return useObserver(() => (<div>
    <p>Video Controls</p>
    <button className="VideoControls-button">Sounds</button>
    <button 
      className="VideoControls-button" 
      onClick={(e) => { handleVideoToggle(e, store) }}
      > Video &nbsp;<b>{store.videoControls.showVideo? "ON":"OFF"} </b> 
      </button>
  </div>));
}