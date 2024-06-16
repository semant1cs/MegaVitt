import { makeAutoObservable } from "mobx";
import { ReactElement } from "react";

export interface ToasterMessage {
  text: string;
  id: number;
}

class LayoutStore {
  modalContent?: ReactElement;
  canShowLoader: boolean = false;
  toasterMessages: ToasterMessage[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  showLoader(flag: boolean) {
    this.canShowLoader = flag;
  }

  showModal(content: ReactElement) {
    this.modalContent = content;
  }

  hideModal() {
    this.modalContent = void 0;
  }

  setToaster(messages: string[]) {
    this.toasterMessages = [
      ...this.toasterMessages,
      ...messages.map(text => ({ text, id: new Date().getTime() + Math.random() })),
    ];
  }

  removeToaster(id: number) {
    this.toasterMessages = this.toasterMessages.filter(msg => msg.id !== id);
  }
}

export default new LayoutStore();
export const layout = new LayoutStore();
