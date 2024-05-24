import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import TextField from "@ui/TextField";
import Template from "./Template";
import LayoutBody from "@layout/Body";
import styles from "./Initialization.module.scss";
import { type FC } from "react";
import type { TInitializationViewProps } from "./Initialization.types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

const InitilalizationView: FC<TInitializationViewProps> = props => {
  return (
    <LayoutBody classNames={{ body: styles.initialization, body__container: styles.initialization__container }}>
      <div className={styles.header}>
        <h2 className={styles.header__title}>Создание сайта&nbsp;&mdash; шаг&nbsp;1</h2>

        <div className={styles.header__inputs}>
          <TextFieldContainer className={styles.input}>
            <TextFieldLabel>Название сайта</TextFieldLabel>

            <TextFieldInner>
              <TextField
                value={""}
                onChange={() => {}}
              />
            </TextFieldInner>
          </TextFieldContainer>

          <TextFieldContainer className={styles.input}>
            <TextFieldLabel>Адрес страницы</TextFieldLabel>

            <TextFieldInner>
              <TextField
                value={""}
                onChange={() => {}}
              />
            </TextFieldInner>
          </TextFieldContainer>
        </div>
      </div>

      <section className={styles.templates}>
        <h3 className={styles.templates__title}>Выберите шаблон</h3>

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
      </section>
    </LayoutBody>
  );
};

export default InitilalizationView;
