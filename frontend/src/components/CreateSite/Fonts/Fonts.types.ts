import type { TCommonCreatorProps, TSiteForm, TUserFonts } from "../CreateSite.types";

export type TFontsContainerProps = TCommonCreatorProps;
export type TFontsViewProps = TFontsContainerProps & {
  form: TSiteForm;
  handlePrevStep(): void;
  handleNextStep(): void;
  handleUserFonts(): void;
  handleSaveFonts(): void;
  handleSetFont(value: string): void;
};

export type TUserFontsModalProps = {
  userFonts: TUserFonts[];
  handleSetFont(value: string): void;
};

export type TSaveFontModalProps = {
  font: string;
};
