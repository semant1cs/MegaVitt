import { makeAutoObservable } from "mobx";

export interface ToasterMessage {
  text: string;
  id: number;
}

class LayoutStore {
  canShowLoader: boolean = false;
  canShowModal: boolean = false;
  toasterMessages: ToasterMessage[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  showLoader(flag: boolean) {
    this.canShowLoader = flag;
  }

  showModal(flag: boolean) {
    this.canShowModal = flag;
  }

  setToaster(messages: string[]) {
    this.toasterMessages = [...this.toasterMessages, ...messages.map(text => ({ text, id: new Date().getTime() + Math.random() }))];
  }

  removeToaster(id: number) {
    this.toasterMessages = this.toasterMessages.filter(msg => msg.id !== id);
  }
}

export default new LayoutStore();
