import type { TCommonCreatorProps, TSiteForm, TUserColors } from "../CreateSite.types";

export type TColorsContainerProps = TCommonCreatorProps;
export type TColorsViewProps = TColorsContainerProps & {
  form: TSiteForm;
  handleSetColor(value: string, label: string): void;
  handlePrevStep(): void;
  handleNextStep(): void;
  handleUserColors(): void;
  handleSaveColors(): void;
};

export type TUserColorsModalProps = {
  userColors: TUserColors[];
  handleSetColor(value: string, label: string): void;
};

export type TSaveColorsModalProps = {
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
