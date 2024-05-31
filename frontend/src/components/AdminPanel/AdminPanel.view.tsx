import { FC } from "react";
import LayoutBody from "@layout/Body";
import styles from "./AdminPanel.module.scss";
import LayoutHeader from "@layout/Header";
import { AdminPanelViewProps } from "./AdminPanel.types";
import CustomTable from "@ui/Table";

const AdminPanelView: FC<AdminPanelViewProps> = ({ usersList }) => {
  return (
    <>
      <LayoutHeader />

      <LayoutBody classNames={{ body__container: styles.adminPanel }}>
        <div className={styles.table}>{usersList !== undefined ? <CustomTable rows={usersList} /> : ""}</div>
      </LayoutBody>
    </>
  );
};

export default AdminPanelView;
