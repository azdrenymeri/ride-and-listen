
export enum Time {
  SUNRISE,  // lindja djellit
  MIDDAY,   // mesdite
  SUNSET,   // perendimi i djellit
  NIGHT,    // Nata
  MIDNIGHT, // mesnata
}

export enum Weather {
  Sunny, Rainy, Snowy
}


export default class Video {
  video_url: string;
  time: Time;
  weather: Weather;

  constructor(video_url:string, time: Time, weather: Weather){
    this.video_url = video_url;
    this.time = time;
    this.weather = weather;
  }
}