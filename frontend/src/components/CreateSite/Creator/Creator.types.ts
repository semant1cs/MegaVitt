import { ComponentProps } from "react";
import type { TCommonCreatorProps, TSiteForm } from "../CreateSite.types";

export type TCreatorContainerProps = TCommonCreatorProps;

export type TCreatorViewProps = TCreatorContainerProps & {
  form: TSiteForm;
  handlePrevStep(): void;
  handleNextStep(): void;
};

export type TVirtualDOMNode = {
  tagName: string;
  props: ComponentProps<keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>;
  children: TVirtualDOMNode[];
};

export type TVirtualDOMNodeHTML = {
  tagName: string;
  props: ComponentProps<keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>;
  children: (TVirtualDOMNodeHTML | string)[];
};
