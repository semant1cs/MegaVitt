import { ComponentProps, FC, useState } from "react";
import styles from "./Test.module.scss";
import LayoutBody from "@layout/Body";
import { TCreatorViewProps } from "../Creator.types";
import { randomId } from "../../../utils/getRandomId";
import { virtualDOM } from "../../../utils/renderVirualDOM";

const CreatorView: FC<TCreatorViewProps> = () => {
  const [vdom, setVdom] = useState();

  const [draggableNode, setDraggableNode] = useState<HTMLElement>();
  const [droppableNode, setDroppableNode] = useState<HTMLElement>();

  function handleOnDragStart(event: React.DragEvent<HTMLElement>) {
    // console.log("event start", event);
    setDraggableNode(event.currentTarget);
  }

  function handleOnDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
  }

  function handleOnDragEnd(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    setDroppableNode(event.currentTarget);

    console.log("droppableNode", event.currentTarget);
    console.log("draggableNode", draggableNode);
  }

  const vNode = virtualDOM.createVNode("div", { className: styles.canvas }, [
    virtualDOM.createVNode("h1", {}, ["Hello, Virtual DOM"]),
    "Text node without tags",
    virtualDOM.createVNode("img", {
      src: "https://i.ibb.co/M6LdN5m/2.png",
      width: 200,
      onMouseEnter: () => console.log("mouseenter"),
    }),
  ]);

  const node = virtualDOM.createDOMNode(vNode);

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
      {node}
      <div>
        <h2>Canvas</h2>
        <div
          className={styles.canvas}
          onDrop={handleOnDragEnd}
          onDragOver={handleOnDragOver}
          id="app"
        ></div>
      </div>
    </LayoutBody>
  );
};

export default CreatorView;
