import { FC } from "react";
import AdminPanelView from "./AdminPanel.view";
import AuthStore from "@store/AuthStore";
import { useNavigate } from "react-router-dom";

const AdminPanelContainer: FC = props => {
  const navigate = useNavigate();

  function handleLogOut() {
    AuthStore.logOut().then(() => navigate("/"));
  }

  return <AdminPanelView handleLogOut={handleLogOut} />;
};

export { AdminPanelContainer };
