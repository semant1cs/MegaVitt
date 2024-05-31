import { FC, useEffect } from "react";
import AdminPanelView from "./AdminPanel.view";
import AdminPanelStore from "@store/AdminPanelStore";
import { observer } from "mobx-react-lite";

const AdminPanelContainer: FC = observer(props => {
  const userList = AdminPanelStore.usersList;

  useEffect(() => {
    AdminPanelStore.getUsers();
  }, []);

  return <AdminPanelView usersList={userList} />;
});

export { AdminPanelContainer };
