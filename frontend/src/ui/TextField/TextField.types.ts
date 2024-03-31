export type TTextFieldContainer = {
  isError?: boolean;
  className?: string;
  variant?: "light" | "dark";
};

export type TTextFieldLabel = {
  isError?: boolean;
  className?: string;
  variant?: "light" | "dark";
};

export type TTextFieldInner = {
  isError?: boolean;
  className?: string;
  variant?: "light" | "dark";
};

export type TTextField = {
  type?: string;
  value: string;
  className?: string;
  variant?: "light" | "dark";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TTextFieldHintText = {
  isError?: boolean;
  className?: string;
  variant?: "light" | "dark";
};
