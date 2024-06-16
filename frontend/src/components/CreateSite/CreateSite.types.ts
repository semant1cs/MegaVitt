import { type ReactElement } from "react";

export type TCreateSiteContainerProps = {};
export type TCreateSiteViewProps = TCreateSiteContainerProps & {
  currentStepPage: ReactElement;
};

export type TSiteForm = {
  title?: string;
  domen?: string;
  font?: string;
  colors?: {
    main?: string;
    mainContrast?: string;
    text?: string;
    backgroundSection?: string;
    background?: string;
    error?: string;
    success?: string;
    warning?: string;
    header?: string;
  };
  html?: string;
};

export type TSiteFormRequired = {
  title: string;
  domen: string;
  font: string;
  colors: {
    main: string;
    mainContrast: string;
    text: string;
    backgroundSection: string;
    background: string;
    error: string;
    success: string;
    warning: string;
    header: string;
  };
  html: string;
};

export type TCommonCreatorProps = {
  initialForm: TSiteForm;
  handleSaveForm(form: TSiteForm): void;
  handleChangeStep(step: TStepPage): void;
};

export type TStepPage = "Initialization" | "Fonts" | "Colors" | "Creator";

export type TUserFonts = {
  id: number | string;
  name: string;
  fontName: string;
};

export type TUserColors = {
  id: number | string;
  name: string;
  mainColor: string;
  backgroundColor: string;
};
