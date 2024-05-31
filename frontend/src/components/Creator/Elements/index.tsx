import { type FC } from "react";
import { randomId } from "../../../utils/getRandomId";
import styles from "../Creator.module.scss";

export type TCommonElementProps = {
  handleOnDragStart(event: React.DragEvent<HTMLElement>): void;
};

export const TextBlock: FC<TCommonElementProps> = props => {
  return (
    <span
      id={randomId()}
      draggable="true"
      className={styles.text}
      onDragStart={props.handleOnDragStart}
    >
      TextBlock
    </span>
  );
};

export const FlexItem: FC<TCommonElementProps> = props => {
  return (
    <div
      id={randomId()}
      draggable="true"
      className={styles.flex__item}
      onDragStart={props.handleOnDragStart}
    ></div>
  );
};

export const FlexContainer: FC<TCommonElementProps> = props => {
  return (
    <div
      id={randomId()}
      draggable="true"
      className={styles.flex__container}
      onDragStart={props.handleOnDragStart}
    ></div>
  );
};
