// dummy data for now
import jsonFile from "../data/initial_data.json";

import City from "../models/City";
import RadioStation from "../models/RadioStation";
import { Genre } from "../models/RadioStation";
import Video from "../models/Video";
import { Time, Weather } from "../models/Video";

export const initialCitiesList = (): Array<City> => {
  const cities: Array<City> = [];

  for (let i = 0; i < jsonFile.length; i++) {
    const stations = setStations(jsonFile[i].stations);
    const videos = setVideos(jsonFile[i].videos);
    let city = new City(jsonFile[i].name, stations, videos);
    cities.push(city);
  }

  return cities;
};

const setStations = (jsonStations: any): Array<RadioStation> => {
  const radioStations: Array<RadioStation> = [];

  for (let i = 0; i < jsonStations.length; i++) {
    radioStations.push(
      new RadioStation(jsonStations[i].name, jsonStations[i].stream_url, [
        Genre.smooth_jazz,
      ])
    );
  }

  return radioStations;
};

const setVideos = (jsonVideos: any): Array<Video> => {
  const videos: Array<Video> = [];

  for (let i = 0; i < jsonVideos.length; i++) {
    videos.push(new Video(jsonVideos[i].video_url, Time.MIDDAY, Weather.Rainy));
  }

  return videos;
};
