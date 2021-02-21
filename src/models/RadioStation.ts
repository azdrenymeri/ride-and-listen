export enum Genre {
  smooth_jazz,
  classic_rock,
  easy_listening,
  blues,
  jazz,
  classical,
  "80s",
  rock,
  country,
  '40s',
  '50s',
  '60s',
  '70s',
  urban
}


export default class RadioStation {
  name: string;
  streamUrl: string;
  genre: [Genre]  
  
  constructor(name:string, streamUrl:string, genres: [Genre]){
    this.name = name;
    this.streamUrl = streamUrl;
    this.genre = genres;
  }


}