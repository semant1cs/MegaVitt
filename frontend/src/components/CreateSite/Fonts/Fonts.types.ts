import type { TCommonCreatorProps } from "../CreateSite.types";

export type TFontsContainerProps = TCommonCreatorProps;
export type TFontsViewProps = TFontsContainerProps & {
  handleUserFonts(): void;
  handleSaveFonts(): void;
};
