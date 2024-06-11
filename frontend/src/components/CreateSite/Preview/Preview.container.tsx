import React from "react";
import type { TPreviewContainerProps } from "./Preview.type";
import PreviewView from "./Preview.view";

const PreviewContainer: React.FC<TPreviewContainerProps> = props => {
  return <PreviewView {...props} />;
};

export { PreviewContainer };
