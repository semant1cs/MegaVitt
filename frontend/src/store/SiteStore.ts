import { DEFAULT_SITE_SETTINGS } from "@components/CreateSite/CreateSite.config";
import type { TSiteForm } from "@components/CreateSite/CreateSite.types";
import { makeAutoObservable } from "mobx";

class SiteStore {
  initialSiteState: TSiteForm = DEFAULT_SITE_SETTINGS;

  constructor() {
    makeAutoObservable(this);
  }

  updateInitialSiteState(newState: Partial<TSiteForm>) {
    this.initialSiteState = { ...this.initialSiteState, ...newState };
  }
}

export default new SiteStore();
export const site = new SiteStore();
