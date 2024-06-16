import { Modal, ModalContent, ModalHeader } from "@layout/Modal";
import React, { useState } from "react";
import type { TSaveFontModalProps } from "../Fonts.types";
import Button from "@ui/Button";
import { layout } from "@store/LayoutStore";
import getErrorMessage from "@utils/getErrorMessage";
import authAxiosInstance from "@api/auth-api-instance";
import { TUserFonts } from "@components/CreateSite/CreateSite.types";
import styles from "../Fonts.module.scss";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import TextField from "@ui/TextField";

const SaveFontModal: React.FC<TSaveFontModalProps> = ({ font, ...props }) => {
  const [templateName, setTemplateName] = useState("");

  async function handleSaveFont() {
    if (templateName === "") {
      layout.setToaster(["Введите название шаблона"]);
      return;
    }

    const formToSave: Omit<TUserFonts, "id"> = { name: templateName, fontName: font };

    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.post("preset-fonts", formToSave);
      layout.hideModal();
    } catch (error) {
      layout.setToaster(await getErrorMessage(error));
      throw error;
    } finally {
      layout.showLoader(false);
    }
  }

  return (
    <Modal>
      <ModalHeader />

      <ModalContent className={styles.modal}>
        <div className={styles.modal__wrapper}>
          <p>Сохранение шрифта</p>

          <div className={styles.modal__inputs}>
            <TextFieldContainer className={styles.modal__inputs__input}>
              <TextFieldLabel>Название шаблона</TextFieldLabel>

              <TextFieldInner>
                <TextField
                  value={templateName}
                  onChange={e => setTemplateName(e.target.value)}
                />
              </TextFieldInner>
            </TextFieldContainer>

            <TextFieldContainer className={styles.modal__inputs__input}>
              <TextFieldLabel>Шрифт</TextFieldLabel>

              <TextFieldInner>
                <TextField
                  value={font}
                  disabled={true}
                  onChange={() => {}}
                />
              </TextFieldInner>
            </TextFieldContainer>
          </div>
        </div>

        <Button
          size="md"
          color="primary"
          variant="contained"
          onClick={handleSaveFont}
        >
          Сохранить
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default SaveFontModal;
