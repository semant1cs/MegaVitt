import { TSiteForm } from "./CreateSite.types";

export const DEFAULT_SITE_SETTINGS: TSiteForm = {
  title: "Новый сайт",
  domen: "http://example.ru",
  font: "",
  colors: {
    main: "#0060E6",
    mainContrast: "#FFFFFF",
    text: "#000000",
    backgroundSection: "#F2F2F4",
    backgound: "#FFFFFF",
    error: "#FF0000",
    success: "#4CBC24",
    warning: "#FFC700",
    header: "#D1D1D1",
  },
  html: "",
};
