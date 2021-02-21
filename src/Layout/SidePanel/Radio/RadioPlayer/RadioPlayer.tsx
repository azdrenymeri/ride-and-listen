import { useObserver } from 'mobx-react';
import React, { useEffect, useState, useRef } from 'react';
import { useApplicationStore } from '../../../../mobx/Store';
import { icons } from './iconImports';
import './RadioPlayer.css';
import {handleVolumeDown, handleTogglePlayPause, handleVolumeUp} from './handleRadioPlayer';
import { type } from 'os';

export  default function RadioPlayer() {
  const store = useApplicationStore();
  const [isPlayerPlaying, setPlaying] = useState(false);
  const playerRef = useRef<HTMLAudioElement>();

  useEffect(() => {
      if(playerRef.current?.isConnected){

        //  chrome does not support autoplay
        playerRef.current.play().then(() => {
            setPlaying(true);
          }).catch((err) => {
            setPlaying(false);
          })
      }

      return () => {
      playerRef.current?.pause();
    }
  }, [])

  return useObserver(() => (
    <div className="RadioPlayer">
      <audio ref={playerRef as any} id="aPlayer" preload="auto" src="https://us4.internet-radio.com/proxy/wsjf?mp=/stream">
        <source src="https://us4.internet-radio.com/proxy/wsjf?mp=/stream" type="audio/mpeg"></source>
      </audio>
      <div className="RadioPlayer-card">
        <p className="RadioPlayer-title">Radio Player</p> 
        
        <button className="RadioPlayer-button">
          <img src={icons.previousIcon} className="RadioPlayer-icon" />
        </button>
        
        <button className="RadioPlayer-button" onClick={(e: any) => handleVolumeDown(e, playerRef.current as HTMLAudioElement)}>
          <img src={icons.volumeDownIcon} className="RadioPlayer-icon" />
        </button>

        <button className="RadioPlayer-button" onClick={(e) => handleTogglePlayPause(e, playerRef.current as HTMLAudioElement)}>
          <img src={icons.playIcon} className="RadioPlayer-icon" />
        </button>
        
        <button className="RadioPlayer-button" onClick={(e) => handleVolumeUp(e, playerRef.current as HTMLAudioElement)}>
          <img src={icons.volumeUpIcon} className="RadioPlayer-icon" />
        </button>

        <button className="RadioPlayer-button">
          <img src={icons.nextIcon} className="RadioPlayer-icon" />
        </button>
      </div>
    </div>));

}