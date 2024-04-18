import { makeAutoObservable, makeObservable } from "mobx";
import authAxiosInstance from "../api/api-instance";

class SiteStore {
  constructor() {
    makeAutoObservable(this);
  }

  getSite(data: any) {
    authAxiosInstance.get("site/", { data: data });
  }
}

export default new SiteStore();
