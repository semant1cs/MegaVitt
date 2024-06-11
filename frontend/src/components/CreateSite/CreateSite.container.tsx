import { site } from "@store/SiteStore";
import Initialization from "./Initialization";
import Creator from "@components/CreateSite/Creator";
import CreateSiteView from "./CreateSite.view";
import React, { useCallback, useState, type ReactElement } from "react";
import Fonts from "./Fonts";
import Colors from "./Colors";
import Preview from "./Preview";
import type { TCommonCreatorProps, TCreateSiteContainerProps, TSiteForm, TStepPage } from "./CreateSite.types";
import LayoutBody from "@layout/Body";
import LayoutHeader from "@layout/Header";
import styles from "./CreateSite.module.scss";

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

            <LayoutBody variant="light">
              <Colors {...commonComponentProps} />
              <Preview {...commonComponentProps} />
            </LayoutBody>
          </>
        );
      case "Fonts":
        return (
          <>
            <LayoutHeader />

            <LayoutBody variant="light">
              <Fonts {...commonComponentProps} />
              <Preview {...commonComponentProps} />
            </LayoutBody>
          </>
        );
      case "Creator":
        return (
          <LayoutBody>
            <Creator {...commonComponentProps} />;
          </LayoutBody>
        );
      case "Initialization":
      default:
        return (
          <>
            <LayoutHeader />

            <LayoutBody
              variant="light"
              classNames={{ body__container: styles.container }}
            >
              <Initialization {...commonComponentProps} />
            </LayoutBody>
          </>
        );
    }
  }, [stepPage]);

  return <CreateSiteView currentStepPage={currentStepPage} />;
};

export default CreateSiteContainer;
