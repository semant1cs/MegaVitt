import { TSiteFormRequired } from "./CreateSite.types";

export const DEFAULT_SITE_SETTINGS: TSiteFormRequired = {
  title: "",
  domen: "",
  font: "Open Sans",
  colors: {
    main: "#0060E6",
    mainContrast: "#FFFFFF",
    text: "#000000",
    backgroundSection: "#F2F2F4",
    background: "#FFFFFF",
    error: "#FF0000",
    success: "#4CBC24",
    warning: "#FFC700",
    header: "#D1D1D1",
  },
  html: "",
};

export const DEFAULT_FONTS: { label: string; value: string }[] = [
  { label: "Open Sans", value: "Open Sans" },
  { label: "Arial", value: "Arial" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Calibri", value: "Calibri" },
  { label: "Candara", value: "Candara" },
  { label: "Commisioner", value: "Commisioner" },
  { label: "Constantia", value: "Constantia" },
  { label: "Franklin Gothic Medium", value: "Franklin Gothic Medium" },
  { label: "Georgia", value: "Georgia" },
  { label: "IBM Plex Sans", value: "IBM Plex Sans" },
  { label: "Inter", value: "Inter" },
  { label: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
  { label: "Manrope", value: "Manrope" },
];

export const COLOR_NAME_BY_LABEL: { [keys in keyof TSiteFormRequired["colors"]]: string } = {
  main: "Основной",
  mainContrast: "Основной контраст",
  text: "Текст",
  backgroundSection: "Поверхность",
  background: "Фон",
  error: "Ошибка",
  success: "Успех",
  warning: "Предупреждение",
  header: "Шапка",
};
