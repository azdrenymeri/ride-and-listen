import CityStore from './CityStore';
import RadioStore from './RadioStore';
import UiStore from './UiStore';
import {configure} from 'mobx'


export default class RootStore {
  cityStore: CityStore;
  radioStore: RadioStore;
  uiStore: UiStore;
  videoPlayer = null;
  
  constructor() {
    configure({enforceActions: 'never'})
    this.cityStore = new CityStore(this);
    this.radioStore = new RadioStore(this);
    this.uiStore = new UiStore(this);
  }

  getStationsFromSelectedCity(){
    let selectedCity = this.uiStore.selectedCity;
    return this.cityStore.getCityRadiStations(selectedCity);
  }
}