import { FC, useEffect, useMemo } from "react";
import AdminPanelView from "./AdminPanel.view";
import AuthStore from "@store/AuthStore";
import { useNavigate } from "react-router-dom";
import AdminPanelStore from "@store/AdminPanelStore";
import { observer } from "mobx-react-lite";

const AdminPanelContainer: FC = props => {
  const navigate = useNavigate();
  const userList = AdminPanelStore.usersList;

  useEffect(() => {
    AdminPanelStore.getUsers();
  });

  function handleLogOut() {
    AuthStore.logOut().then(() => navigate("/"));
  }

  return (
    <AdminPanelView
      handleLogOut={handleLogOut}
      usersList={userList}
    />
  );
};

export { AdminPanelContainer };
