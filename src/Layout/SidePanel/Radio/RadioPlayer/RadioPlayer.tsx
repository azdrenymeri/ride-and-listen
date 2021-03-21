import {  observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import { useApplicationStore } from '../../../../mobx/Store';
import { icons } from './iconImports';
import './RadioPlayer.css';
import isDevelopment from './../../../../utils/mode';

import { handleVolumeDown, handleTogglePlayPause, 
         handleVolumeUp, handleStationChange, 
         navigate } from './handleRadioPlayer';

function RadioPlayer() {
  const store = useApplicationStore();
  const playerRef = useRef<HTMLAudioElement>();
   
  useEffect(() => {
    store.uiStore.audioReference = playerRef.current;

    if (playerRef.current?.isConnected && !isDevelopment()) {
      //  chrome does not support autoplay
      //  and will throw an error if not handled
      playerRef.current.play().then().catch((e) => {})
    }

    return () => {
      playerRef.current?.pause();
    }
  }, [])

  return (
    <div className="RadioPlayer">
      <audio
        onPause={(e) => store.uiStore.radioState.paused = true}
        onPlay={(e) => store.uiStore.radioState.paused = false}
        ref={playerRef as any}
        id="aPlayer"
        preload="auto"
        src="https://us4.internet-radio.com/proxy/wsjf?mp=/stream">
        <source src="https://us4.internet-radio.com/proxy/wsjf?mp=/stream" type="audio/mpeg"></source>
      </audio>
      <div className="RadioPlayer-card">
        <p className="RadioPlayer-title">{store.uiStore.selectedRadio}</p>

        <button className="RadioPlayer-button"
          onClick={(e) => handleStationChange(e, playerRef.current as HTMLAudioElement, store, navigate.PREV)}>
          <img src={icons.previousIcon} className="RadioPlayer-icon" />
        </button>

        <button
          className="RadioPlayer-button"
          onClick={(e: any) => handleVolumeDown(e, playerRef.current as HTMLAudioElement)}>
          <img src={icons.volumeDownIcon} className="RadioPlayer-icon" />
        </button>

        <button
          className="RadioPlayer-button"
          onClick={(e) => handleTogglePlayPause(e, playerRef.current as HTMLAudioElement)}>
          <img src={!store.uiStore.radioState.paused ? icons.pauseIcon : icons.playIcon} className="RadioPlayer-icon" />
        </button>

        <button
          className="RadioPlayer-button"
          onClick={(e) => handleVolumeUp(e, playerRef.current as HTMLAudioElement)}>
          <img src={icons.volumeUpIcon} className="RadioPlayer-icon" />
        </button>

        <button
          className="RadioPlayer-button"
          onClick={(e) => handleStationChange(e, playerRef.current as HTMLAudioElement, store, navigate.NEXT)}>
          <img src={icons.nextIcon} className="RadioPlayer-icon" />
        </button>
      </div>
    </div>);

}

export default observer(RadioPlayer);