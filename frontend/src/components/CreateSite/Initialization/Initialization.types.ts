import type { TCommonCreatorProps, TSiteForm } from "../CreateSite.types";

export type TInitializationContainerProps = TCommonCreatorProps;
export type TInitializationViewProps = TInitializationContainerProps & {
  form: TSiteForm;
  handleSetInput(value: string, label: string): void;
  handleNextStep(): void;
};

export type TTemplateContainerProps = {};

export type TTemplateViewProps = {};
