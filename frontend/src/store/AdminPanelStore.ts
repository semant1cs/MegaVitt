import { makeAutoObservable } from "mobx";

class AdminPanelStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new AdminPanelStore();
