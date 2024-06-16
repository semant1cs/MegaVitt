import { FC, useEffect, useMemo, useState } from "react";
import styles from "./Creator.module.scss";
import { TCreatorViewProps } from "./Creator.types";
import { randomId } from "../../../utils/getRandomId";
import { observer } from "mobx-react-lite";
import createStyles from "../CreateSite.module.scss";
import VirtualDomStore, { type TNode } from "@store/VirtualDomStore";
import { FlexContainer, FlexItem, TextBlock } from "./Elements";
import Button from "@ui/Button";
import LayoutBody from "@layout/Body";
import { layout } from "@store/LayoutStore";
import authAxiosInstance from "@api/auth-api-instance";
import getErrorMessage from "@utils/getErrorMessage";
import { renderToString } from "react-dom/server";
import { useNavigate } from "react-router-dom";
import { DEFAULT_SITE_SETTINGS } from "../CreateSite.config";

const CreatorView: FC<TCreatorViewProps> = observer(({ form, handleNextStep, handlePrevStep, ...props }) => {
  function handleOnDragStart(event: React.DragEvent<HTMLElement>) {
    event.dataTransfer.setData("draggableNode", event.currentTarget.id);
  }

  function handleOnDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
  }

  function handleOnDragEnter(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.outline = "2px solid red";
  }

  function handleOnDragLeave(event: React.DragEvent<HTMLElement>) {
    event.currentTarget.style.outline = "none";
  }

  function handleOnDragEnd(event: React.DragEvent<HTMLElement>) {
    event.preventDefault();
    event.stopPropagation();

    const droppableNodeTarget = event.currentTarget;
    const draggableNodeId = event.dataTransfer.getData("draggableNode");
    const draggableNodeTarget = document.getElementById(draggableNodeId);

    droppableNodeTarget.style.outline = "none";

    if (!droppableNodeTarget || !draggableNodeTarget) return;

    const droppableProps: TNode["props"] = {
      ...VirtualDomStore.getAllAttributes(droppableNodeTarget),
      className: droppableNodeTarget.className,
    };

    const draggableProps: TNode["props"] = {
      ...VirtualDomStore.getAllAttributes(draggableNodeTarget),
      key: randomId(),
      draggable: false,
      onDrop: handleOnDragEnd,
      onDragOver: handleOnDragOver,
      onDragEnter: handleOnDragEnter,
      onDragLeave: handleOnDragLeave,
      className: draggableNodeTarget.className,
    };

    delete droppableProps.class;
    delete draggableProps.class;

    const virtualDraggable = VirtualDomStore.createVNode(
      draggableNodeTarget.tagName.toLowerCase(),
      draggableProps,
      draggableNodeTarget.childNodes,
    );

    VirtualDomStore.appendChild(droppableProps, virtualDraggable);
  }

  const appStyles = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      overflowY: "auto",
      backgroundColor: "#ffffff",
    }),
    [],
  );

  useEffect(() => {
    if (!VirtualDomStore.vDom) {
      const vDomProps = {
        id: "app",
        // style: appStyles,
        onDrop: handleOnDragEnd,
        className: styles.canvas__app,
        onDragOver: handleOnDragOver,
        onDragEnter: handleOnDragEnter,
        onDragLeave: handleOnDragLeave,
      };

      VirtualDomStore.updateVDom({
        tagName: "div",
        props: vDomProps,
        children: [],
      });
    }
  }, [appStyles]);

  const navigate = useNavigate();

  async function handleSaveSite() {
    layout.showLoader(true);

    const formToSave = {
      name: form.name,
      link: form.link,
      html: renderToString(VirtualDomStore.dom),
    };

    try {
      const { data: responseData } = await authAxiosInstance.post("sites", formToSave);
      props.handleSaveForm(DEFAULT_SITE_SETTINGS);
      navigate("/cabinet");
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  return (
    <LayoutBody classNames={{ body__container: `${createStyles.container} ${styles.container}` }}>
      <div className={styles.creator}>
        <div className={styles.elements}>
          <TextBlock handleOnDragStart={handleOnDragStart} />
          <FlexItem handleOnDragStart={handleOnDragStart} />
          <FlexContainer handleOnDragStart={handleOnDragStart} />
        </div>

        <div className={createStyles.buttons}>
          <Button
            size="md"
            color="secondary"
            variant="contained"
            className={createStyles.buttons__button}
            onClick={handlePrevStep}
          >
            Назад
          </Button>

          <Button
            size="md"
            color="primary"
            variant="contained"
            className={createStyles.buttons__button}
            onClick={handleSaveSite}
          >
            Сохранить сайт
          </Button>
        </div>
      </div>

      <div className={styles.canvas}>{VirtualDomStore.dom}</div>
    </LayoutBody>
  );
});

export default CreatorView;
