import { handleStationChange, navigate } from "../Radio/RadioPlayer/handleRadioPlayer";
import { handleVideoChange } from "../Video/handleVideo";

export function handleCityClick(e: any, store: any) {
  if (store.uiStore.selectedCity === e.target.innerText.trim()){
    handleVideoChange(e, store.uiStore.videoReference, store);
    return;
  }
  store.uiStore.selectedCity = e.target.innerText.trim();
  store.uiStore.radioChannelPosition = 0;
  handleStationChange(e,store.uiStore.audioReference,store, navigate.NEXT);
  handleVideoChange(e, store.uiStore.videoReference, store);
}