import { Modal, ModalContent, ModalHeader } from "@layout/Modal";
import { Select, SelectItem } from "@ui/Select";
import React, { useState } from "react";
import type { TUserFontsModalProps } from "../Fonts.types";
import Button from "@ui/Button";
import { randomId } from "@utils/getRandomId";
import { layout } from "@store/LayoutStore";
import getErrorMessage from "@utils/getErrorMessage";
import authAxiosInstance from "@api/auth-api-instance";
import { TUserFonts } from "@components/CreateSite/CreateSite.types";
import styles from "../Fonts.module.scss";

const UserFontsModal: React.FC<TUserFontsModalProps> = ({ userFonts, handleSetFont, ...props }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(`${userFonts[0].id}`);

  async function handleChangeFont() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get(`preset-fonts/${selectedTemplate}`);

      handleSetFont((responseData as TUserFonts).fontName);
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
          <p>Ваши шрифты</p>

          <Select
            value={selectedTemplate}
            onChange={(e, value) => setSelectedTemplate(value)}
          >
            {userFonts.map(font => (
              <SelectItem
                key={randomId()}
                value={`${font.id}`}
              >{`${font.name}: ${font.fontName}`}</SelectItem>
            ))}
          </Select>
        </div>

        <Button
          size="md"
          color="primary"
          variant="contained"
          onClick={handleChangeFont}
        >
          Выбрать
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default UserFontsModal;
