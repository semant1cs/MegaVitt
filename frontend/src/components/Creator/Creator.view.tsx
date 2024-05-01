// import React, { FC, useEffect, useMemo, useState } from "react";
// import type { TCreatorViewProps, TVirtualDOM, TVirtualDOMNode, TVirtualDOMNodeHTML } from "./Creator.types";
// import styles from "./Creator.module.scss";
// import LayoutBody from "@layout/Body";
// import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
// import parse from "html-react-parser";
// import VirtualDOM, { VirtualDOMElement } from "./Test/util";
// import { nanoid } from "@reduxjs/toolkit";

import { FC } from "react";
import type { TCreatorViewProps } from "./Creator.types";
import layoutStyles from "@layout/Layout.module.scss";
import LayoutHeader from "@layout/Header";
import LayoutBody from "@layout/Body";
import Button from "@ui/Button";
import styles from "./Creator.module.scss";
import { useNavigate } from "react-router-dom";
import TextFieldContainer from "@ui/TextField/TextFieldContainer";
import TextFieldLabel from "@ui/TextField/TextFieldLabel";
import TextFieldInner from "@ui/TextField/TextFieldInner";
import TextField from "@ui/TextField";
import Template from "./Template";

// interface Element {
//   id: number;
//   name: string;
// }

// interface CanvasElement {
//   id: number;
//   children: JSX.Element[] | null;
// }

// const ElementItem: React.FC<{ element: Element }> = ({ element }) => {
//   return (
//     <Draggable
//       draggableId={element.id.toString()}
//       index={element.id}
//     >
//       {provided => (
//         <div
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//           style={{ ...provided.draggableProps.style, marginBottom: "8px" }}
//         >
//           {element.name}
//         </div>
//       )}
//     </Draggable>
//   );
// };

// /** Вьюха для отображения страницы создания пользовательского сайта */
// const CreatorView: FC<TCreatorViewProps> = () => {
//   const [vdom, setVdom] = useState<VirtualDOMElement[]>([]);

//   function handleDrop(result: DropResult) {
//     const { source, destination } = result;

//     if (!destination || destination.droppableId !== "canvas") return;

//     setVdom(prev => [
//       ...prev,
//       { tagName: "div", props: { class: styles.container, onmouseover: () => console.log("daw") }, children: [] },
//     ]);
//   }

//   const vNode: VirtualDOMElement = {
//     tagName: "div",
//     props: { className: "container" },
//     children: [
//       {
//         tagName: "h1",
//         props: { style: "width: 200px; background-color: red" },
//         children: [
//           {
//             tagName: "span",
//             props: {},
//             children: ["Counter"],
//           },
//         ],
//       },
//       { tagName: "p", props: {}, children: [`Count: ${12312}`] },
//       ...vdom,
//     ],
//   };

//   const appp = document.getElementById("appp");

//   // Монтируем виртуальный DOM на страницу
//   if (appp) {
//     VirtualDOM.patch(vNode, appp);
//   }

//   console.log(vdom);

//   return (
//     <LayoutBody classNames={{ body__container: styles.creator }}>
//       <DragDropContext onDragEnd={handleDrop}>
//         <div className={styles.elements}>
//           <h2>Elements</h2>
//           <Droppable droppableId="elements">
//             {provided => (
//               <ul
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//               >
//                 <ElementItem element={{ id: 1, name: "Flex Container" }} />
//                 <ElementItem element={{ id: 2, name: "Flex Item" }} />
//                 <ElementItem element={{ id: 3, name: "Text" }} />
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//         </div>
//         <div className={styles.canvas}>
//           <h2>Canvas</h2>
//           <Droppable
//             droppableId="canvas"
//             direction="horizontal"
//           >
//             {provided => (
//               <div
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 className={styles.canvas__field}
//               >
//                 <div id="appp"></div>
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </DragDropContext>
//     </LayoutBody>
//   );
// };

// export default CreatorView;

const CreatorView: FC<TCreatorViewProps> = props => {
  const navigate = useNavigate();

  return (
    <>
      <LayoutHeader>
        <ul className={layoutStyles.nav}>
          <li>
            <Button
              variant="text"
              className={layoutStyles.nav__item}
              onClick={() => navigate("/cabinet")}
            >
              Мои сайты
            </Button>
          </li>

          <li>
            <Button
              variant="text"
              className={layoutStyles.nav__item}
              onClick={() => {}}
            >
              <span>{123}</span>
              <span className={["user-icon", layoutStyles.nav__icon].join(" ")}></span>
            </Button>
          </li>
        </ul>
      </LayoutHeader>

      <LayoutBody classNames={{ body: styles.creator }}>
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

          <Template />
        </section>
      </LayoutBody>
    </>
  );
};

export default CreatorView;
