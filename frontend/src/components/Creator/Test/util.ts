interface VirtualDOMProps {
  [key: string]: any;
}

type VirtualDOMChild = VirtualDOMElement | string;

export interface VirtualDOMElement {
  tagName: string | Function;
  props: VirtualDOMProps;
  children: VirtualDOMChild[];
}

class VirtualDOM {
  static createVNode(
    tagName: string | Function,
    props: VirtualDOMProps = {},
    ...children: VirtualDOMChild[]
  ): VirtualDOMElement {
    return {
      tagName,
      props,
      children: children.flat(),
    };
  }

  static createDOMNode(vNode: VirtualDOMElement | string): Node {
    if (typeof vNode === "string") {
      return document.createTextNode(vNode);
    }

    const { tagName, props, children } = vNode;

    const node = document.createElement(tagName as string);

    this.patchProps(node, {}, props);

    children.forEach(child => {
      node.appendChild(this.createDOMNode(child));
    });

    return node;
  }

  static patchNode(
    node: Node,
    vNode: VirtualDOMElement | string,
    nextVNode: VirtualDOMElement | string | undefined,
  ): Node {
    if (nextVNode === undefined) {
      node.remove();
      return document.createTextNode("");
    }

    if (typeof vNode === "string" || typeof nextVNode === "string") {
      if (vNode !== nextVNode) {
        const nextNode = this.createDOMNode(nextVNode);
        (node as ChildNode).replaceWith(nextNode);
        return nextNode;
      }

      return node;
    }

    if (vNode.tagName !== nextVNode.tagName) {
      const nextNode = this.createDOMNode(nextVNode);
      (node as ChildNode).replaceWith(nextNode);
      return nextNode;
    }

    this.patchProps(node as HTMLElement, (vNode as VirtualDOMElement).props, (nextVNode as VirtualDOMElement).props);
    this.patchChildren(
      node as HTMLElement,
      (vNode as VirtualDOMElement).children,
      (nextVNode as VirtualDOMElement).children,
    );

    return node;
  }

  private static patchProp(node: HTMLElement, key: string, value: any, nextValue: any): void {
    if (key.startsWith("on")) {
      const eventName = key.slice(2);
  
      node[eventName] = nextValue;
  
      if (!nextValue) {
        node.removeEventListener(eventName, this.listener);
      } else if (!value) {
        node.addEventListener(eventName, this.listener);
      }
      return;
    }
  
    if (typeof nextValue === "object" && !(nextValue instanceof Array)) {
      // Обработка объектов
      Object.entries(nextValue).forEach(([propKey, propValue]) => {
        if (propValue == null) {
          node.removeAttribute(propKey);
        } else {
          // Устанавливаем свойство или атрибут элемента в зависимости от типа значения
          if (propKey in node) {
            (node as any)[propKey] = propValue;
          } else {
            node.setAttribute(propKey, propValue.toString());
          }
        }
      });
      return;
    }
  
    if (nextValue == null || nextValue === false) {
      node.removeAttribute(key);
      return;
    }
  
    node.setAttribute(key, nextValue);
  }
  
  private static patchProps(node: HTMLElement, props: VirtualDOMProps, nextProps: VirtualDOMProps): void {
    const mergedProps = { ...props, ...nextProps };
  
    Object.keys(mergedProps).forEach(key => {
      if (props[key] !== nextProps[key]) {
        this.patchProp(node, key, props[key], nextProps[key]);
      }
    });
  }

  private static patchChildren(
    parent: HTMLElement,
    vChildren: VirtualDOMChild[],
    nextVChildren: VirtualDOMChild[],
  ): void {
    const minLen = Math.min(vChildren.length, nextVChildren.length);

    for (let i = 0; i < minLen; i++) {
      this.patchNode(parent.childNodes[i], vChildren[i], nextVChildren[i]);
    }

    if (vChildren.length > nextVChildren.length) {
      for (let i = vChildren.length - 1; i >= minLen; i--) {
        parent.childNodes[i].remove();
      }
    } else if (nextVChildren.length > vChildren.length) {
      for (let i = minLen; i < nextVChildren.length; i++) {
        parent.appendChild(this.createDOMNode(nextVChildren[i]));
      }
    }
  }

  static patch(nextVNode: VirtualDOMElement | string, node: Node): Node {
    const vNode = (node as any).v || this.recycleNode(node);

    const newNode = this.patchNode(node, vNode, nextVNode);
    (newNode as any).v = nextVNode;

    return newNode;
  }

  private static recycleNode(node: Node): VirtualDOMElement | string {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.nodeValue || "";
    }

    const tagName = (node.nodeName as string).toLowerCase();
    const children = Array.from(node.childNodes).map(this.recycleNode.bind(this));

    return this.createVNode(tagName, {}, ...children);
  }

  private static listener(event: Event): any {
    return (this as any)[event.type](event);
  }
}

export default VirtualDOM;
