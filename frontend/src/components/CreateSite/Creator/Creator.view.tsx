import { FC, useEffect } from "react";
import styles from "./Creator.module.scss";
import { TCreatorViewProps } from "./Creator.types";
import { randomId } from "../../../utils/getRandomId";
import { observer } from "mobx-react-lite";
import VirtualDomStore, { type TNode } from "@store/VirtualDomStore";
import { FlexContainer, FlexItem, TextBlock } from "./Elements";

const CreatorView: FC<TCreatorViewProps> = observer(() => {
  function handleOnDragStart(event: React.DragEvent<HTMLElement>) {
    event.dataTransfer.setData("draggableNode", event.currentTarget.id);
  }

  function handleOnDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
  }

  function handleOnDragEnter(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.outline = "2px solid red";
  }

  function handleOnDragLeave(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.outline = "none";
  }

  function handleOnDragEnd(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    event.stopPropagation();

    const droppableNodeTarget = event.currentTarget;
    const draggableNodeId = event.dataTransfer.getData("draggableNode");
    const draggableNodeTarget = document.getElementById(draggableNodeId);

    droppableNodeTarget.style.outline = "none";

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
    <div className={styles.creator}>
      <div className={styles.elements}>
        <TextBlock handleOnDragStart={handleOnDragStart} />
        <FlexItem handleOnDragStart={handleOnDragStart} />
        <FlexContainer handleOnDragStart={handleOnDragStart} />
      </div>
      <div className={styles.canvas}>{VirtualDomStore.dom}</div>
    </div>
  );
});

export default CreatorView;
