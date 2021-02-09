import React, {useEffect} from 'react';
import {mainRadio} from '../../../../HTTP/Radio/MainRadio';

export default function RadionPlayer(){
  useEffect(()=> {
    const radio = mainRadio();
    radio.play();
  },[])

  return (<div>
        Radio station
  </div>);
}