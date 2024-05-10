import React, { type FunctionComponent } from "react";
import { type ComponentProps, type ReactElement } from "react";

export type TNode = {
  tagName: string | FunctionComponent;
  props: ComponentProps<keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>;
  children: (TNode | string)[];
};

class VirtualDOM {
  virtualDOM: TNode = {
    tagName: "div",
    props: { id: "virtual-dom-root" },
    children: [],
  };
  dom: ReactElement = (<div id="virtual-dom-root"></div>);

  public createVNode(tagName: TNode["tagName"], props: TNode["props"] = {}, children: (TNode | string)[] = []): TNode {
    if (typeof tagName === "function") {
      const result = tagName(props, children);
      if (typeof result === "undefined") {
        throw new Error("Function component must return a TNode");
      }
      return result as unknown as TNode;
    }

    return { tagName, props, children };
  }

  public createDOMNode(vNode: TNode | string): ReactElement | null {
    if (typeof vNode === "function") return null;

    if (typeof vNode === "string") {
      return React.createElement("span", {}, [vNode]);
    }

    const { tagName, props, children } = vNode;

    return children.length !== 0
      ? React.createElement(
          tagName,
          props,
          children.map((child: TNode | string) => this.createDOMNode(child)),
        )
      : React.createElement(tagName, props);
  }

  public appendChild(patch: TNode, child: TNode): void {}
}

export const virtualDOM = new VirtualDOM();
