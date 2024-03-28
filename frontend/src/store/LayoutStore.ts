import { makeAutoObservable } from "mobx";

class LayoutStore {
  canShowLoader: boolean = false;
  canShowModal: boolean = false;
  toasterMessage: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  showLoader() {
    this.canShowLoader = true;
  }

  showModal(flag: boolean) {
    this.canShowModal = flag;
  }

  showToaster(message: string) {
    this.updateToasterMessage(message);

    setTimeout(() => this.updateToasterMessage(""), 2000);
  }

  private updateToasterMessage(message: string) {
    this.toasterMessage = message;
  }
}

export default new LayoutStore();
