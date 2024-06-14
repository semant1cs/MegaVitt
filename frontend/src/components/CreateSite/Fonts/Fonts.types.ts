import type { TCommonCreatorProps, TSiteForm } from "../CreateSite.types";

export type TFontsContainerProps = TCommonCreatorProps;
export type TFontsViewProps = TFontsContainerProps & {
  form: TSiteForm;
  handlePrevStep(): void;
  handleNextStep(): void;
  handleUserFonts(): void;
  handleSaveFonts(): void;
  handleSetFont(e: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string): void;
};
