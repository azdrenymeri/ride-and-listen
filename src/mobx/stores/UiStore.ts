import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

export default class UiStore {
  videoState = {
    showVideo: true,
    videoSounds: false,
  };
  radioState = {
    paused: true
  }
  rootStore: RootStore;
  selectedCity: string;
  selectedRadio: string;
  radioChannelPosition: number;
  audioReference: HTMLAudioElement | null;
  videoReference: HTMLIFrameElement | null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.selectedCity = "New York City";
    this.selectedRadio = 'Smooth Jazz CD 101.9 New York';
    this.radioChannelPosition = 0;
    this.audioReference = null;
    this.videoReference = null;
  }
}
