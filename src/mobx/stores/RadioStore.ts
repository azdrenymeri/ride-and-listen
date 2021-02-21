import RootStore from "./RootStore";

export default class RadioStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore){
    this.rootStore = rootStore;
  }
}