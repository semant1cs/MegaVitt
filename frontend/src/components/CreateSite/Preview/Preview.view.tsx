import React from "react";
import styles from "./Preview.module.scss";
import type { TPreviewViewProps } from "./Preview.type";

const PreviewView: React.FC<TPreviewViewProps> = ({ customStyles }) => {
  return (
    <div
      style={customStyles}
      className={styles.preview}
    >
      <div className={styles.header}></div>

      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.block__image}></div>

          <div className={styles.block__content}>
            <div className={styles.info}>
              <p className={styles.info__type}>Лекция</p>

              <p className={styles.info__date}>11 июня</p>

              <h4 className={styles.info__title}>Удобный конструктор сайта вашего мероприятия</h4>

              <button className={styles.info__button}>Купить билет</button>
            </div>

            <div className={styles.hint}>
              <div className={styles.hint__date}>
                <span className={[styles.hint__clock, "clock-icon"].join(" ")}></span>
                <span className={styles.hint__time}>00:00-00:00</span>
              </div>
              <div className={styles.hint__place}>
                <span className={[styles.hint__map, "map-icon"].join(" ")}></span>
                <span className={styles.hint__address}>ул. Мира, д.&nbsp;1, каб.&nbsp;10</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.states}>
          <div className={styles.states__block}>
            <p className={[styles.states__error, "trash-icon"].join(" ")}></p>

            <div className={styles.states__text}>
              <h5>Деструктивный</h5>
              <p>Используется для обозначения того, что что-либо удалено, либо каким-то образом отрицательно</p>
            </div>
          </div>

          <div className={styles.states__block}>
            <p className={[styles.states__success, "success-icon"].join(" ")}></p>

            <div className={styles.states__text}>
              <h5>Успех</h5>
              <p>
                Используется для указания положительных значений или для визуального подтверждения успеха пользователя
              </p>
            </div>
          </div>

          <div className={styles.states__block}>
            <p className={[styles.states__warning, "warning-icon"].join(" ")}></p>

            <div className={styles.states__text}>
              <h5>Предупреждение</h5>
              <p>Используется для привлечения внимания к элементу или части интерфейса</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewView;
