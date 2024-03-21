import { makeAutoObservable } from "mobx";

class LayoutStore {

  canShowLoader: boolean = false;
  canShowModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  updateCanShowLoader(flag: boolean) {
    this.canShowLoader = flag;
  }

  updateCanShowModal(flag: boolean) {
    this.canShowModal = flag;
  }
}

export default new LayoutStore();