import RadioStation from './RadioStatio';
import Video, { Weather, Time } from './Video';

export default class City {
  name: string;
  private stations: Array<RadioStation>
  private videos: Array<Video>

  constructor(name: string, stations: Array<RadioStation>, videos: Array<Video>) {
    this.name = name;
    this.stations = stations;
    this.videos = videos;
  }

  addVideo(video: Video) {
    this.videos.push(video);
  }

  addStation(station: RadioStation) {
    this.stations.push(station);
  }

  getVideosByWeatherAndTime(weather: Weather, time: Time) {
    return this.videos.map((video: Video) => {
      if (video.weather === weather && video.time === time) {
        return video;
      }
    })
  }
}