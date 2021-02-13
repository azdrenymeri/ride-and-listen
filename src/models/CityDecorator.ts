import City from './City';
import RadioStation from './RadioStation';
import Video from './Video';


export default class CityDecorator {

  constructor(private cities: Array<City>) {
    this.cities = cities;
  }

  getRadiosByCityName(cityName: string): Array<Video> {
   return this.cities.map((city: any) => {
      if (city.getName().toLowerCase() === cityName.toLowerCase()){
        return city.getVideos();
      }
    }) as Array<Video>;
  }

  getCities(): Array<City> {
    return this.cities;
  }

  getCitiesNames(): Array<string> {
    return this.cities.map((city: City) => city.getName());
  }
}