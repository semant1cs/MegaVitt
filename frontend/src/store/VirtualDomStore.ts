import { makeAutoObservable } from "mobx";
import React from "react";
import { type ComponentProps, type ReactElement } from "react";
import { randomId } from "../utils/getRandomId";

export type TNode = {
  tagName: string;
  props: ComponentProps<keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>;
  children: (TNode | string)[];
};

class VirtualDOM {
  vDom: TNode | string | null = null;
  dom: ReactElement | null = null;

  constructor() {
    makeAutoObservable(this, {
      vDom: true,
      dom: true,
      createDOMNode: false,
      createVNode: false,
      appendChild: false,
      parseHTMLElementToTNode: false,
      getAllAttributes: false,
    });
  }

  updateDom(state: ReactElement) {
    this.dom = state;
  }

  updateVDom(state: TNode | string) {
    this.vDom = state;
    this.updateDom(this.createDOMNode(state));
  }

  public getAllAttributes(element: HTMLElement | Element) {
    function parseAttributeValue(value: string) {
      const obj: { [key: string]: any } = {};

      value.split(";").forEach(attr => {
        const [property, val] = attr.split(":").map(a => a.trim());
        if (property && val) {
          obj[property] = val;
        }
      });

      return obj;
    }

    const attributes: { [key: string]: any } = {};

    Array.from(element.attributes).forEach(attr => {
      attributes[attr.name] = attr.value.includes(";") ? parseAttributeValue(attr.value) : attr.value;
    });

    return attributes;
  }

  public createVNode(tagName: TNode["tagName"], props: TNode["props"] = {}, children?: NodeListOf<ChildNode>): TNode {
    const processedChildren: (TNode | string)[] = Array.from(children || []).map(child => {
      return child.nodeType === child.ELEMENT_NODE
        ? this.createVNode(child.nodeName.toLowerCase(), this.getAllAttributes(child as Element), child.childNodes)
        : child.nodeValue || "";
    });

    return { tagName, props, children: processedChildren };
  }

  public createDOMNode(vNode: TNode | string): ReactElement {
    if (typeof vNode === "string") return React.createElement("span", { key: randomId() }, [vNode]);

    const stack: { element: ReactElement; children: (TNode | string)[] }[] = [];
    const rootElement = React.createElement(vNode.tagName, vNode.props, []);
    stack.push({ element: rootElement, children: vNode.children });

    while (stack.length) {
      const { element, children } = stack.pop()!;

      children.forEach(child => {
        if (typeof child === "string") {
          const textElement = React.createElement("span", { key: randomId() }, [child]);
          element.props.children.push(textElement);
        } else {
          const { tagName, props, children } = child;
          const newElement = React.createElement(tagName, props, []);

          stack.push({ element: newElement, children });
          element.props.children.push(newElement);
        }
      });
    }

    this.updateDom(rootElement);
    return rootElement;
  }

  public appendChild(parentProps: TNode["props"], child: TNode): void {
    const tree = this.vDom ? this.vDom : this.createVNode("div", parentProps);
    const stack = [tree];

    while (stack.length > 0) {
      const node = stack.pop();

      if (!node || typeof node === "string") continue;

      if (node.props?.id === parentProps?.id) {
        node.children.push(child);
        this.updateVDom(tree);
        return;
      }

      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          stack.push(node.children[i]);
        }
      }
    }

    this.updateVDom(tree);
  }

  parseHTMLElementToTNode(element: HTMLElement): TNode {
    const stack: { element: HTMLElement; parent: TNode | null }[] = [{ element, parent: null }];
    const root: TNode = { tagName: "", props: {}, children: [] };

    while (stack.length) {
      const { element, parent } = stack.pop()!;
      const tagName = element.tagName.toLowerCase();
      const props: ComponentProps<keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>> = {};
      const children: (TNode | string)[] = [];

      for (let i = 0; i < element.attributes.length; i++) {
        const attribute = element.attributes[i];
        props[attribute.name] = attribute.value;
      }

      for (let i = element.children.length - 1; i >= 0; i--) {
        const childElement = element.children[i];
        if (childElement instanceof HTMLElement) {
          stack.push({ element: childElement, parent: root });
        } else {
          children.unshift(childElement.textContent || "");
        }
      }

      const node: TNode = { tagName, props, children };
      if (parent) {
        parent.children.push(node);
      } else {
        Object.assign(root, node);
      }
    }

    return root;
  }

  //   public appendChild(parent: TNode | null | string, child: TNode | string): void {
  //     if (typeof parent === "string") return;

  //     const newChild = typeof child === "string" ? child : this.createVNode(child.tagName, child.props, child.children);

  //     if (!this.vDom || (typeof this.vDom === "object" && Object.keys(this.vDom).length === 0)) {
  //       this.vDom = parent;
  //     } else {
  //       if (typeof this.vDom === "object") {
  //         if (!this.vDom.children) {
  //           this.vDom.children = [newChild];
  //         } else {
  //           this.vDom.children.push(newChild);
  //         }
  //       }
  //     }

  //     // После обновления vDom строим новый dom
  //     // TODO Здесь нужно добавить правильный ребилд dom с помощью patchNode
  //     this.updateDom(this.createDOMNode(this.vDom ? this.vDom : newChild));
  //   }

  //   public patchNode(node: Element | null, vNode: TNode | string, nextVNode: TNode | string): Element | Text | null {
  //     if (!node) return null;

  //     if (nextVNode === undefined) {
  //       node.remove();
  //       return null;
  //     }

  //     if (typeof vNode === "string" || typeof nextVNode === "string") {
  //       if (vNode !== nextVNode) {
  //         return this.createDOMNode(nextVNode);
  //       }

  //       return node;
  //     }

  //     if (vNode.tagName !== nextVNode.tagName) {
  //       return this.createDOMNode(nextVNode);
  //     }

  //     const mergedProps = { ...vNode.props, ...nextVNode.props };
  //     const updatedChildren = nextVNode.children.map((child, index) =>
  //       this.patchNode(node.children.item(index), vNode.children[index], child),
  //     );

  //     return document.createElement(node.tagName, mergedProps);
  //   }
}

export default new VirtualDOM();
