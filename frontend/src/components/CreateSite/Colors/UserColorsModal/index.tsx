import { Modal, ModalContent, ModalHeader } from "@layout/Modal";
import { Select, SelectItem } from "@ui/Select";
import React, { useState } from "react";
import Button from "@ui/Button";
import { randomId } from "@utils/getRandomId";
import { layout } from "@store/LayoutStore";
import getErrorMessage from "@utils/getErrorMessage";
import authAxiosInstance from "@api/auth-api-instance";
import { TUserColors } from "@components/CreateSite/CreateSite.types";
import styles from "../Colors.module.scss";
import { TUserColorsModalProps } from "../Colors.types";

const UserColorsModal: React.FC<TUserColorsModalProps> = ({ userColors, handleSetColor, ...props }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(`${userColors[0].id}`);

  async function handleChangeFont() {
    layout.showLoader(true);

    try {
      const { data: responseData } = await authAxiosInstance.get(`preset-colors/${selectedTemplate}`);
      const colors: TUserColors = responseData;

      /** Когда сделают нормальный бек с цветами - исправить */
      handleSetColor(colors.mainColor, "main");
      handleSetColor(colors.backgroundColor, "background");

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
            {userColors.map(color => (
              <SelectItem
                key={randomId()}
                value={`${color.id}`}
              >
                {color.name}
              </SelectItem>
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

export default UserColorsModal;
