import RadioStation from './RadioStation';
import Video, { Weather, Time } from './Video';

interface ICity {
  getName(): string;
  getStations(): Array<RadioStation>
  getVideos(): Array<Video>
}


export default class City implements ICity {
  constructor(private name: string, private stations: Array<RadioStation>, private videos: Array<Video>) {
    this.name = name;
    this.stations = stations;
    this.videos = videos;
  }

  getName(): string {
    return this.name;
  }

  getStations(): Array<RadioStation> {
    return this.stations;
  }

  getVideos(): Array<Video> {
    return this.videos;
  }

  addVideo(video: Video) {
    this.videos.push(video);
  }

  addStation(station: RadioStation) {
    this.stations.push(station);
  }

  getVideosByWeatherAndTime(weather: Weather, time: Time) {
    // return this.videos.map((video: Video) => {
    //   if (video.weather === weather && video.time === time) {
    //     return video;
    //   }
    // })
  }
}