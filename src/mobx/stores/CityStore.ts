import { makeAutoObservable } from "mobx";
import City from "../../models/City";
import RootStore from "./RootStore";

export default class CityStore {
  cities: City[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore){
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  getcityVideos(cityName: string) {
    return this.cities.map((city: City) => {
      if (city.getName() === cityName) {
        return city.getVideos();
      }
    }).filter((item: any) => item !== undefined)[0];
  };

  getCityRadiStations(cityName: string) {
    return this.cities.map((city: City) => {
      if(city.getName() === cityName) {
        return city.getStations();
      }
    }).filter((item: any) => item !== undefined)[0];
  }

  addCity(city: City) {
    this.cities.push(city);
  }
  
}