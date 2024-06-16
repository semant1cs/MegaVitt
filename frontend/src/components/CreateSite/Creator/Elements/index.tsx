import React, { useMemo, type FC } from "react";
import { randomId } from "../../../../utils/getRandomId";
import styles from "../Creator.module.scss";

export type TCommonElementProps = {
  handleOnDragStart(event: React.DragEvent<HTMLElement>): void;
};

export const TextBlock: FC<TCommonElementProps> = props => {
  const textStyles: React.CSSProperties = {
    fontSize: "14px",
    color: "#000000",
    fontWeight: "700",
    width: "fit-content",
    height: "fit-content",
  };

  return (
    <span
      id={randomId()}
      draggable="true"
      style={textStyles}
      className={styles.text}
      onDragStart={props.handleOnDragStart}
    >
      TextBlock
    </span>
  );
};

export const FlexItem: FC<TCommonElementProps> = props => {
  const itemStyles: React.CSSProperties = {
    fontSize: "14px",
    color: "#000000",
    fontWeight: "700",
    width: "50px",
    height: "50px",
    backgroundColor: "#525866",
  };

  return (
    <div
      id={randomId()}
      draggable="true"
      style={itemStyles}
      className={styles.flex__item}
      onDragStart={props.handleOnDragStart}
    ></div>
  );
};

export const FlexContainer: FC<TCommonElementProps> = props => {
  const containerStyles: React.CSSProperties = {
    fontSize: "14px",
    color: "#000000",
    fontWeight: "700",
    display: "flex",
    flexWrap: "wrap",
    width: "fit-content",
    minWidth: "100px",
    maxWidth: "100%",
    height: "100px",
    overflowY: "auto",
    border: "1px solid #2f3543",
    backgroundColor: "#4d8ce8",
  };

  return (
    <div
      id={randomId()}
      draggable="true"
      style={containerStyles}
      className={styles.flex__container}
      onDragStart={props.handleOnDragStart}
    ></div>
  );
};
