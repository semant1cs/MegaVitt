import React, { ReactNode, memo } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Authentication from "@views/Authentication";
import StartPage from "@views/StartPage";
import AllSites from "@views/AllSites";
import AuthStore from "@store/AuthStore";
import AdminPanel from "@components/AdminPanel";
// import Creator from "@views/Creator";

type RouteType = {
  path: string;
  element: ReactNode;
};

const AppRouter: React.FC = memo(() => {
  const publicRoutes: RouteType[] = [
    { path: "/", element: <StartPage /> },
    { path: "/auth", element: <Authentication /> },
    // { path: "/creator", element: <Creator /> },
  ];

  const privateRoutes: RouteType[] = [
    ...publicRoutes,
    ...[
      { path: "/cabinet", element: <AllSites /> },
      { path: "/admin", element: <AdminPanel /> },
    ],
  ];

  const location = useLocation();
  const isAuth = !!localStorage.getItem("userToken");

  return isAuth ? (
    privateRoutes.findIndex(comp => comp.path === location.pathname) !== -1 ? (
      <Routes>
        {privateRoutes.map(({ path, element }, index) => (
          <Route
            path={path}
            element={element}
            key={index}
          />
        ))}
      </Routes>
    ) : (
      <Navigate to="/cabinet" />
    )
  ) : publicRoutes.findIndex(comp => comp.path === location.pathname) !== -1 ? (
    <Routes>
      {publicRoutes.map(({ path, element }, index) => (
        <Route
          path={path}
          element={element}
          key={index}
        />
      ))}
    </Routes>
  ) : (
    <Navigate to="/" />
  );
});

export default AppRouter;
