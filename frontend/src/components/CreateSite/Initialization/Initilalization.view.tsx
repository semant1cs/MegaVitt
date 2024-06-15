import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import TextField from "@ui/TextField";
import Template from "./Template";
import styles from "./Initialization.module.scss";
import createStyles from "../CreateSite.module.scss";
import { type FC } from "react";
import type { TInitializationViewProps } from "./Initialization.types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import Button from "@ui/Button";
import { observer } from "mobx-react-lite";
import LayoutBody from "@layout/Body";

const InitilalizationView: FC<TInitializationViewProps> = observer(
  ({ form, handleSetInput, handleNextStep, ...props }) => {
    return (
      <LayoutBody
        variant="light"
        classNames={{ body__container: createStyles.container }}
      >
        <div className={createStyles.header}>
          <h2 className={createStyles.title}>Создание сайта&nbsp;&mdash; шаг&nbsp;1</h2>

          <div className={styles.inputs}>
            <TextFieldContainer className={styles.inputs__input}>
              <TextFieldLabel>Название сайта</TextFieldLabel>

              <TextFieldInner>
                <TextField
                  value={form.title || ""}
                  placeholder={"Новый сайт"}
                  onChange={e => handleSetInput(e.target.value, "title")}
                />
              </TextFieldInner>
            </TextFieldContainer>

            <TextFieldContainer className={styles.inputs__input}>
              <TextFieldLabel>Адрес страницы</TextFieldLabel>

              <TextFieldInner>
                <TextField
                  value={form.domen || ""}
                  placeholder={"https://example.ru"}
                  onChange={e => handleSetInput(e.target.value, "domen")}
                />
              </TextFieldInner>
            </TextFieldContainer>
          </div>
        </div>

        <section className={styles.templates}>
          <h3 className={createStyles.subtitle}>Выберите шаблон</h3>

          <Swiper
            slidesPerView={"auto"}
            keyboard={{
              enabled: true,
            }}
            scrollbar={{
              draggable: true,
              el: "#templates-slider-scrollbar",
              horizontalClass: styles.templates__scrollbar,
              dragClass: styles.templates__scrollbar__thumb,
            }}
            mousewheel={true}
            spaceBetween={30}
            modules={[Keyboard, Mousewheel, Scrollbar]}
            className={styles.templates__container}
          >
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
            <SwiperSlide className={styles.templates__slide}>
              <Template />
            </SwiperSlide>
          </Swiper>

          <div id="templates-slider-scrollbar"></div>

          <div className={createStyles.buttons}>
            <Button
              size="md"
              color="primary"
              variant="contained"
              className={createStyles.buttons__button}
              onClick={handleNextStep}
            >
              Следующий шаг
            </Button>
          </div>
        </section>
      </LayoutBody>
    );
  },
);

export default InitilalizationView;
