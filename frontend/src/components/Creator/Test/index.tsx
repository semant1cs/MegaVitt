import { type FC, type ReactElement, useState, useEffect } from "react";
import styles from "./Test.module.scss";
import LayoutBody from "@layout/Body";
import { TCreatorViewProps } from "../Creator.types";
import { randomId } from "../../../utils/getRandomId";
import { type TNode, virtualDOM } from "../../../utils/renderVirualDOM";

const CreatorView: FC<TCreatorViewProps> = () => {
  const [vDom, setVDom] = useState<TNode>();
  const [dom, setDom] = useState<ReactElement | null>();

  const [draggableNode, setDraggableNode] = useState<HTMLElement>();
  const [droppableNode, setDroppableNode] = useState<HTMLElement>();

  function handleOnDragStart(event: React.DragEvent<HTMLElement>) {
    setDraggableNode(event.currentTarget);
    // console.log("event start", event);
  }

  function handleOnDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    // console.log("event over", event);
  }

  function handleOnDragEnter(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.border = "1px solid red";
  }

  function handleOnDragLeave(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.border = "1px solid white";
  }

  function handleOnDragEnd(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    event.currentTarget.style.border = "1px solid white";

    const droppableNodeTarget = event.currentTarget;
    setDroppableNode(droppableNodeTarget);

    // console.log("draggableNode", draggableNode);
    if (!droppableNodeTarget || !draggableNode) return;

    // console.log("droppableNode", droppableNodeTarget);
    // console.log("draggableNode", draggableNode);

    const droppableProps: TNode["props"] = {
      ...virtualDOM.getAllAttributes(droppableNodeTarget),
      className: droppableNodeTarget.className,
      draggable: false,
    };

    const draggableProps: TNode["props"] = {
      ...virtualDOM.getAllAttributes(draggableNode),
      className: draggableNode.className,
      draggable: false,
    };

    delete droppableProps.class;
    delete draggableProps.class;

    const virtualDroppable = virtualDOM.createVNode(
      droppableNodeTarget?.tagName.toLowerCase() || "div",
      droppableProps,
      [],
    );
    const virtualDraggable = virtualDOM.createVNode(draggableNode?.tagName.toLowerCase() || "div", draggableProps, []);

    const newVDom = virtualDOM.appendChild(virtualDroppable, virtualDraggable);

    setVDom(prev => {
      return prev ? { ...prev, children: [newVDom] } : newVDom;
    });
    // setVDom(prev => {
    //   return prev ? { ...prev, children: [...prev.children, virtualDraggable] } : virtualDraggable;
    // });
  }

  useEffect(() => {
    if (!vDom) return;

    // console.log(vDom);
    setDom(virtualDOM.createDOMNode(vDom));
  }, [vDom]);

  return (
    <LayoutBody classNames={{ body__container: styles.creator }}>
      <div className={styles.elements}>
        <h2>Elements</h2>
        <ul>
          <div
            id={randomId()}
            key="text"
            draggable="true"
            className={styles.text}
            onDragStart={handleOnDragStart}
          >
            Text
          </div>
          <div
            id={randomId()}
            key="flex"
            draggable="true"
            className={styles.flex__item}
            onDragStart={handleOnDragStart}
          >
            Flex Item
          </div>
          <div
            id={randomId()}
            key="flex-container"
            draggable="true"
            className={styles.flex__container}
            onDragStart={handleOnDragStart}
          >
            Flex Container
          </div>
        </ul>
      </div>
      <div>
        <h2>Canvas</h2>
        <div
          id="app"
          className={styles.canvas}
          onDragEnter={handleOnDragEnter}
          onDragLeave={handleOnDragLeave}
          onDrop={handleOnDragEnd}
          onDragOver={handleOnDragOver}
        >
          {dom}
        </div>
      </div>
    </LayoutBody>
  );
};

export default CreatorView;
