import React from "react";
import type { TSiteForm } from "../CreateSite.types";

export type TPreviewContainerProps = {
  initialForm: TSiteForm;
};
export type TPreviewViewProps = TPreviewContainerProps & {
  customStyles: React.CSSProperties;
};
