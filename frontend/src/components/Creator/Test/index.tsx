import { FC, useState, useMemo, ReactElement, useEffect } from "react";
import styles from "./Test.module.scss";
import LayoutBody from "@layout/Body";
import { TCreatorViewProps } from "../Creator.types";
import { randomId } from "../../../utils/getRandomId";
import { observer } from "mobx-react-lite";
import VirtualDomStore, { type TNode } from "@store/VirtualDomStore";
import HTMLReactParser from "html-react-parser/lib/index";
import { toJS } from "mobx";

const CreatorView: FC<TCreatorViewProps> = observer(() => {
  function handleOnDragStart(event: React.DragEvent<HTMLElement>) {
    event.dataTransfer.setData("draggableNode", event.currentTarget.id);
  }

  function handleOnDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
  }

  function handleOnDragEnter(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.border = "1px solid red";
  }

  function handleOnDragLeave(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.border = "1px solid white";
  }

  function handleOnDragEnd(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    event.stopPropagation();
    
    const droppableNodeTarget = event.currentTarget;
    const draggableNodeId = event.dataTransfer.getData("draggableNode");
    const draggableNodeTarget = document.getElementById(draggableNodeId);

    droppableNodeTarget.style.border = "1px solid white";

    if (!droppableNodeTarget || !draggableNodeTarget) return;

    const droppableProps: TNode["props"] = {
      ...VirtualDomStore.getAllAttributes(droppableNodeTarget),
      className: droppableNodeTarget.className,
    };

    const draggableProps: TNode["props"] = {
      ...VirtualDomStore.getAllAttributes(draggableNodeTarget),
      key: randomId(),
      draggable: false,
      onDrop: handleOnDragEnd,
      onDragOver: handleOnDragOver,
      onDragEnter: handleOnDragEnter,
      onDragLeave: handleOnDragLeave,
      className: draggableNodeTarget.className,
    };

    delete droppableProps.class;
    delete draggableProps.class;

    const virtualDraggable = VirtualDomStore.createVNode(
      draggableNodeTarget.tagName.toLowerCase(),
      draggableProps,
      draggableNodeTarget.childNodes,
    );

    console.log(droppableProps);
    VirtualDomStore.appendChild(droppableProps, virtualDraggable);
  }

  useEffect(() => {
    if (!VirtualDomStore.vDom) {
      VirtualDomStore.updateVDom({
        tagName: "div",
        props: {
          id: "app",
          onDrop: handleOnDragEnd,
          className: styles.canvas__app,
          onDragOver: handleOnDragOver,
          onDragEnter: handleOnDragEnter,
          onDragLeave: handleOnDragLeave,
        },
        children: [],
      });
    }
  }, []);

  return (
    <LayoutBody classNames={{ body__container: styles.creator }}>
      <div className={styles.elements}>
        <h2>Elements</h2>
        <ul>
          <div
            id={randomId()}
            draggable="true"
            className={styles.text}
            onDragStart={handleOnDragStart}
          >
            Text
          </div>
          <div
            id={randomId()}
            draggable="true"
            className={styles.flex__item}
            onDragStart={handleOnDragStart}
          >
            Flex Item
          </div>
          <div
            id={randomId()}
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
        <div className={styles.canvas}>{VirtualDomStore.dom}</div>
      </div>
    </LayoutBody>
  );
});

export default CreatorView;
