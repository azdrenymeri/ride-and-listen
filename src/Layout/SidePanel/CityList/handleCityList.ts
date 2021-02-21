import { handleStationChange, navigate } from "../Radio/RadioPlayer/handleRadioPlayer";

export function handleCityClick(e: any, store: any) {
  store.uiStore.selectedCity = e.target.innerText.trim();
  store.uiStore.radioChannelPosition = 0;
  handleStationChange(e,store.uiStore.audioReference,store, navigate.NEXT);
}