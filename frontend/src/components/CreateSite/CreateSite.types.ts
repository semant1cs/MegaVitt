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
    backgound?: string;
    error?: string;
    success?: string;
    warning?: string;
    header?: string;
  };
  html?: string;
};

export type TCommonCreatorProps = {
  initialForm: TSiteForm;
  handleSaveForm(form: TSiteForm): void;
  handleChangeStep(step: TStepPage): void;
};

export type TStepPage = "Initialization" | "Fonts" | "Colors" | "Creator";
