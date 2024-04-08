
import { makeAutoObservable, makeObservable } from "mobx";
import authAxiosInstance from "../api/api-instance";

class SiteStore {
   constructor() {
     makeAutoObservable(this)
   }

   getSite(data:any) {
      authAxiosInstance({data: data, method: "GET", url: "site/"})
   }
}

export default new SiteStore()