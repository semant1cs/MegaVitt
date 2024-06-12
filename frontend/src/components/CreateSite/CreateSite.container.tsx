import { site } from "@store/SiteStore";
import Initialization from "./Initialization";
import Creator from "@components/CreateSite/Creator";
import CreateSiteView from "./CreateSite.view";
import React, { useCallback, useState, type ReactElement } from "react";
import Fonts from "./Fonts";
import Colors from "./Colors";
import type { TCommonCreatorProps, TCreateSiteContainerProps, TSiteForm, TStepPage } from "./CreateSite.types";
import LayoutHeader from "@layout/Header";

const CreateSiteContainer: React.FC<TCreateSiteContainerProps> = props => {
  const [initialForm, setInitialForm] = useState<TSiteForm>(site.initialSiteState);
  const [stepPage, setStepPage] = useState<TStepPage>("Initialization");

  /** Функция для сохранения формы */
  const handleSaveForm = useCallback((form: TSiteForm): void => site.updateInitialSiteState(form), []);

  const handleChangeStep = useCallback((step: TStepPage): void => setStepPage(step), []);

  /** Основные пропсы для компонентов */
  const commonComponentProps: TCommonCreatorProps = {
    initialForm,
    handleSaveForm,
    handleChangeStep,
  };

  /** Текущий шаг */
  const currentStepPage: ReactElement = React.useMemo(() => {
    switch (stepPage) {
      case "Colors":
        return (
          <>
            <LayoutHeader />

            <Colors {...commonComponentProps} />
          </>
        );
      case "Fonts":
        return (
          <>
            <LayoutHeader />

            <Fonts {...commonComponentProps} />
          </>
        );
      case "Creator":
        return <Creator {...commonComponentProps} />;
      case "Initialization":
      default:
        return (
          <>
            <LayoutHeader />

            <Initialization {...commonComponentProps} />
          </>
        );
    }
  }, [stepPage]);

  return <CreateSiteView currentStepPage={currentStepPage} />;
};

export default CreateSiteContainer;
