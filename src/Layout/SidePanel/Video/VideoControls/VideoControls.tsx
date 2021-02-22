import React, {useState} from 'react';
import './VideoControls.css';
import { useObserver } from 'mobx-react';
import { useApplicationStore } from '../../../../mobx/Store';

export default function VideoControls() {

  const store = useApplicationStore();

  const handleVideoToggle = (event: any, store: any) => {
    store.uiStore.videoState.showVideo = !store.uiStore.videoState.showVideo;
  }

  const [mute,setMute] = useState(true)

  const handleVoiceToggle = (event: any, store: any) => {
    if (store.uiStore.videoReference != null) {
      if (store.uiStore.videoReference.isMuted()) {
        store.uiStore.videoReference.unMute();
        setMute(false)
      } else {
        store.uiStore.videoReference.mute();
        setMute(true)
      }
    }
  }

  return useObserver(() => (<div>
    <p>Video Controls</p>
    <button
      className="VideoControls-button"
      onClick={(e) => handleVoiceToggle(e, store)}
    >Sounds &nbsp; <b> {mute? "OFF":"ON"} </b></button>
    <button
      className="VideoControls-button"
      onClick={(e) => { handleVideoToggle(e, store) }}
    > Video &nbsp;<b>{store.uiStore.videoState.showVideo ? "ON" : "OFF"} </b>
    </button>
  </div>));
}