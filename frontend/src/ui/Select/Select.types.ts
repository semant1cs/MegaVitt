import type { CSSProperties, FC, JSXElementConstructor, MouseEvent, ReactElement, ReactPortal } from "react";

export type TSelectItemProps = {
  value: string | null;
} & Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "value">;

export type TFindSelectComponent =
  | ReactPortal
  | ReactElement<unknown, string | JSXElementConstructor<any>>
  | null
  | undefined
  | string;

export type TSelectProps = {
  /** Кастомный класс */
  className?: string;
  /** Кастомные стили */
  style?: CSSProperties;
  /** Placeholder */
  placeholder?: string;
  /** Открыт ли селект
   * @default false
   */
  isOpen?: boolean;
  /** При изменении открытия */
  onChangeIsOpen?: (open: boolean) => void;
  /** Кастомные классы */
  classNames?: {
    select?: string;
    select__open?: string;
    select__placeholder?: string;
    select__disabled?: string;
    select__value?: string;
    select__icon?: string;
    select__list?: string;
  };
  /** Кастомный рендер значения как функция */
  onRenderValue?: (
    el: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>,
    value: string,
  ) => TFindSelectComponent;
  /** Значение */
  value?: string;
  /** Кастомный рендер значения */
  onChange?: (
    event: MouseEvent<HTMLLIElement>,
    newValue: string,
    setValue: React.Dispatch<React.SetStateAction<string | null>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => any;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void | boolean;
  /** Кастомный рендер значения в селекте */
  CustomRenderValue?: FC;
} & Omit<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "value" | "onChange" | "className" | "onClick"
>;

export type TSelectListProps = {
  classNames?: {
    list?: string;
  };
  style?: CSSProperties;
  onClose: () => void;
  x: number;
  y: number;
  width: number;

  onMount?: () => void;
};
