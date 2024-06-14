import type { TCommonCreatorProps, TSiteForm } from "../CreateSite.types";

export type TColorsContainerProps = TCommonCreatorProps;
export type TColorsViewProps = TColorsContainerProps & {
  form: TSiteForm;
  handleSetColor(value: string, label: string): void;
  handlePrevStep(): void;
  handleNextStep(): void;
  handleUserColors(): void;
  handleSaveColors(): void;

};
