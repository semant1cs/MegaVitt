import { makeAutoObservable } from "mobx";

export type TStepPage = "initialization" | "fonts" | "colors" | "creator";

class SiteStore {
  stepPage: TStepPage = "initialization";

  constructor() {
    makeAutoObservable(this);
  }

  updateStepPage(value: TStepPage) {
    this.stepPage = value;
  }
}

export default new SiteStore();
export const site = new SiteStore();
