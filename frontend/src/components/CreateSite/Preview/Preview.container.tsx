import React, { memo, useEffect } from "react";
import type { TPreviewContainerProps } from "./Preview.type";
import PreviewView from "./Preview.view";

const PreviewContainer: React.FC<TPreviewContainerProps> = memo(({ initialForm, ...props }) => {
  const customStyles = {
    "--custom-font-family": initialForm.font || "Open Sans",
    "--custom-main-color": initialForm.colors?.main || "#0060E6",
    "--custom-mainContrast-color": initialForm.colors?.mainContrast || "#FFFFFF",
    "--custom-text-color": initialForm.colors?.text || "#000000",
    "--custom-backgroundSection-color": initialForm.colors?.backgroundSection || "#F2F2F4",
    "--custom-backgound-color": initialForm.colors?.backgound || "#FFFFFF",
    "--custom-error-color": initialForm.colors?.error || "#FF0000",
    "--custom-success-color": initialForm.colors?.success || "#4CBC24",
    "--custom-warning-color": initialForm.colors?.warning || "#FFC700",
    "--custom-header-color": initialForm.colors?.header || "#D1D1D1",
  } as React.CSSProperties;

  return (
    <PreviewView
      {...props}
      initialForm={initialForm}
      customStyles={customStyles}
    />
  );
});

export { PreviewContainer };
