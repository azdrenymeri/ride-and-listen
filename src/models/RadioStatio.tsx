import { Howl } from 'howler';


export default class RadioStation {
  name: string;
  radioObj: Howl;

  constructor(name:string, radioObj: Howl){
    this.name = name;
    this.radioObj = radioObj;
  }

}