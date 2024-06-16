import { DEFAULT_SITE_SETTINGS } from "@components/CreateSite/CreateSite.config";
import type { TSiteForm, TUserColors, TUserFonts } from "@components/CreateSite/CreateSite.types";
import { makeAutoObservable } from "mobx";
import { layout } from "./LayoutStore";
import authAxiosInstance from "@api/auth-api-instance";
import getErrorMessage from "@utils/getErrorMessage";

const fontsRootURL = "preset-fonts";
const colorsRootURL = "preset-colors";

class SiteStore {
  initialSiteState: TSiteForm = DEFAULT_SITE_SETTINGS;
  userFonts?: TUserFonts[];
  userColors?: TUserColors[];

  constructor() {
    makeAutoObservable(this);
  }

  updateInitialSiteState(newState: Partial<TSiteForm>) {
    this.initialSiteState = { ...this.initialSiteState, ...newState };
  }

  updateUserFonts(newState: TUserFonts[]) {
    this.userFonts = newState;
  }

  updateUserColors(newState: TUserColors[]) {
    this.userColors = newState;
  }

  async getUserFonts() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get(fontsRootURL);

      this.updateUserFonts(responseData);
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  async saveFonts(font: TUserFonts) {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(fontsRootURL, font);
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  async getUserColors() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get(colorsRootURL);

      this.updateUserColors(responseData);
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  async saveColors(color: TUserColors) {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post(colorsRootURL, color);
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }
}

export default new SiteStore();
export const site = new SiteStore();
