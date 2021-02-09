import { action, makeObservable } from "mobx"

export default class ObservableRadioStore {
  radios: Array<any>

  constructor(){
    makeObservable(this,{addRadio: action});
    this.radios = [];
  }

  addRadio(radio: any){
    this.radios.push(radio);
  }
}