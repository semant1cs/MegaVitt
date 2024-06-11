import { ComponentProps } from "react";
import type { TCommonCreatorProps } from "../CreateSite.types";

export type TCreatorContainerProps = TCommonCreatorProps;

export type TCreatorViewProps = TCreatorContainerProps & {};

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
