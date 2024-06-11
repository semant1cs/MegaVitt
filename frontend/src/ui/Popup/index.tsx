import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import React, { FC, PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";
import Button from "@ui/Button";

type TPopupProps = {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
};

const Popup: FC<PropsWithChildren<TPopupProps>> = ({ children, onClick, className }) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchor(anchor ? null : event.currentTarget);
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(!!anchor);

  const OnEscapePressed = (event: KeyboardEvent) => {
    if (event.key === "Escape") setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => window.removeEventListener("click", handleClose);
  }, []);

  useEffect(() => {
    if (popupRef && popupRef?.current) {
      popupRef.current.addEventListener("keydown", OnEscapePressed);
    }

    return () => {
      if (popupRef.current) popupRef.current.removeEventListener("keydown", OnEscapePressed);
    };
  }, []);

  return (
    <div ref={popupRef}>
      <Button
        onClick={handleClick}
        className={className}
      >
        {children}
      </Button>
      <BasePopup
        open={isOpen}
        anchor={anchor}
        className={styles.popup_body}
      >
        <Button
          size="md"
          color="primary"
          onClick={onClick}
          variant="contained"
        >
          Выйти
        </Button>
      </BasePopup>
    </div>
  );
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export default Popup;
