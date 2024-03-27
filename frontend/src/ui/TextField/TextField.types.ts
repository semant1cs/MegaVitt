export type TTextFieldContainer = {
  isError?: boolean;
  className?: string;
};

export type TTextFieldLabel = {
  isError?: boolean;
  className?: string;
};

export type TTextFieldInner = {
  isError?: boolean;
  className?: string;
};

export type TTextField = {
  type?: string;
  value: string;
  isError?: boolean;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TTextFieldHintText = {
  isError?: boolean;
  className?: string;
};
