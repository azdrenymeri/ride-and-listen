import { observable, computed } from "mobx";
import City from "../../models/City";

export default class CityStore {
  @observable cities: City[] = [];
  

  @computed getcityVideos(cityName: string) {
    return this.cities.map((city: City) => {
      if (city.getName() === cityName) {
        return city.getVideos();
      }
    })
  };
  
}