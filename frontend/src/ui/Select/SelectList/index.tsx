import { type PropsWithChildren, forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import type { TSelectListProps } from "../Select.types";

import styles from "../Select.module.scss";

const SelectList = forwardRef((props: PropsWithChildren<TSelectListProps>, ref) => {
  const innerRef = useRef<HTMLUListElement>(null);
  useImperativeHandle(ref, () => innerRef.current);

  useEffect(() => {
    if (typeof props.onMount === "function") props.onMount();
  }, []);

  return (
    <div
      className={styles.list__wrapper}
      id="select-list-wrapper"
    >
      <ul
        ref={innerRef}
        className={[styles.list, props.classNames?.list].join(" ")}
        style={{
          left: `${props.x}px`,
          top: `${props.y}px`,
          width: `${props.width}px`,
        }}
      >
        {props.children}
      </ul>
      <div
        className={styles.list__bg}
        onClick={() => props.onClose()}
      ></div>
    </div>
  );
});

export default SelectList;
