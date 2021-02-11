import React, {useEffect} from 'react';
import ReactHowler from 'react-howler';

import {useObserver} from 'mobx-react';
import {useApplicationStore} from '../../../../mobx/Store';

export default function RadioPlayer(){

  const store = useApplicationStore();

  useEffect(()=> {
    if (store.radioPlayer != null) {
      store.radioPlayer.play();
    }
    return () => {
      store.radioPlayer.unload();
    }
  },[])

  const handleLoadError = (soundId: number) => {
      console.log("There was an error loading radio");
  }
  const handlePlayError = () => {
      console.log("There was an error playing the radio")
  }

  return useObserver(() => (<ReactHowler 
            src="https://us4.internet-radio.com/proxy/wsjf?mp=/stream"
            format={["mp3", "aac"]}
            html5={true}
            ref={(ref:any) => (store.radioPlayer = ref)}
            onLoadError={(id:number) => {handleLoadError(id)}}
  />));
}