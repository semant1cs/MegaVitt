import { type FC, type MouseEvent, type PropsWithChildren, useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import type { TFindSelectComponent, TSelectProps } from "./Select.types";

import styles from "./Select.module.scss";

import SelectItem from "./SelectItem";
import SelectList from "./SelectList";
import React from "react";

const ATTRS_INITIAL_STATE = {
  x: 0,
  y: 0,
  width: 0,
};

const Select: FC<PropsWithChildren<TSelectProps>> = ({
  isOpen = false,
  className,
  classNames,
  onClick,
  onChange,
  onChangeIsOpen,
  CustomRenderValue,
  ...props
}) => {
  const [value, setValue] = useState<string | null>(props.value || null);
  const [attrsForList, setAttrsForList] = useState(ATTRS_INITIAL_STATE);
  const refSelect = useRef<HTMLDivElement>(null);
  const refSelectMenu = useRef<HTMLUListElement>(null);

  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setValue(() => (typeof props.value !== "undefined" ? props.value : ""));
  }, [props.value]);

  useEffect(() => {
    open ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
    if (typeof onChangeIsOpen === "function") onChangeIsOpen(open);

    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (typeof onClick === "undefined") return setOpen(prev => !prev);

    const canToggle = onClick(event);
    if (typeof canToggle === "boolean" && canToggle) return setOpen(prev => !prev);
  }

  function getAttrsForList() {
    if (refSelect.current) {
      const rectTarget = refSelect.current.getBoundingClientRect();
      setAttrsForList(prev => ({ ...prev, width: rectTarget.width }));
    }

    if (!open || !refSelect.current || !refSelectMenu.current)
      return setAttrsForList(prev => ({ ...prev, x: 0, y: 0 }));

    const rectTarget = refSelect.current.getBoundingClientRect(),
      rectMenu = refSelectMenu.current.getBoundingClientRect();

    let y = 0;

    if (window.innerHeight < rectTarget.y + rectTarget.height + rectMenu.height) {
      y = rectTarget.y - rectMenu.height;
    } else {
      y = rectTarget.y + rectTarget.height;
    }

    setAttrsForList(prev => ({
      ...prev,
      x: rectTarget.x,
      y,
    }));
  }

  useEffect(() => getAttrsForList(), [open, refSelect.current, refSelectMenu.current]);

  let findSelectComponent: TFindSelectComponent = null;

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child) && child.type === SelectItem) {
      let active = false;

      if (value === child.props.value) {
        active = true;

        if (typeof props.onRenderValue === "function") {
          findSelectComponent = props.onRenderValue(child.props, value as string);
        } else {
          findSelectComponent = child.props.children;
        }
      }

      const onClick = (event: MouseEvent<HTMLLIElement>) => {
        if (typeof child.props.onClick === "function" && !child.props.onClick(event, child.props.value)) return;

        if (typeof onChange === "function") {
          const returnValue = onChange(event, child.props.value || "", setValue, setOpen);
          if (typeof returnValue === "boolean" && !returnValue) return;
        } else {
          setValue(() => child.props.value);
        }

        setOpen(() => false);
      };

      return React.cloneElement(child, {
        ...child.props,
        onClick,
        className: [child.props.className, active ? styles.active : null].join(" "),
      });
    }

    return child;
  });

  return (
    <>
      <div
        {...props}
        className={[
          styles.select,
          className,
          classNames && [classNames.select].join(" "),
          open ? [styles.select__open, classNames?.select__open].join(" ") : null,
        ].join(" ")}
        onClick={handleClick}
        ref={refSelect}
      >
        {CustomRenderValue ? (
          <div className={[styles.select__value, classNames?.select__value].join(" ")}>
            <CustomRenderValue />
          </div>
        ) : (
          <div className={[styles.select__value, classNames?.select__value].join(" ")}>{findSelectComponent}</div>
        )}

        <span className={[styles.select__icon, classNames?.select__icon, "arrow-icon"].join(" ")}></span>
      </div>

      {open && refSelect.current
        ? createPortal(
            <SelectList
              {...attrsForList}
              onClose={() => setOpen(() => false)}
              ref={refSelectMenu}
              classNames={{ list: classNames?.select__list }}
              onMount={() => getAttrsForList()}
            >
              {childrenWithProps}
            </SelectList>,
            document.body,
          )
        : null}
    </>
  );
};

export { Select, SelectItem };
