import { FC } from "react";
import LayoutBody from "@layout/Body";
import styles from "./AdminPanel.module.scss";
import LayoutHeader from "@layout/Header";
import Button from "@ui/Button";
import { useNavigate } from "react-router-dom";
import AuthStore from "@store/AuthStore";
import { AdminPanelViewProps } from "./AdminPanel.types";
import CustomTable from "@ui/Table";

const AdminPanelView: FC<AdminPanelViewProps> = ({ handleLogOut, usersList }) => {
  const navigate = useNavigate();
  const userName = AuthStore.initialUserState?.username;

  return (
    <>
      <LayoutHeader>
        <ul className={styles.nav}>
          <li>
            <Button
              variant="text"
              className={styles.nav__item}
              onClick={() => {}}
            >
              <span>{userName}</span>
              <span className={["user-icon", styles.nav__icon].join(" ")}></span>
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              onClick={handleLogOut}
            >
              Выйти
            </Button>
          </li>
        </ul>
      </LayoutHeader>
      <LayoutBody>{usersList !== undefined ? <CustomTable rows={usersList} /> : ""}</LayoutBody>
    </>
  );
};

export default AdminPanelView;
