import React, { ReactNode, memo } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Authentication from "@views/Authentication";
import StartPage from "@views/StartPage";
import AllSites from "@views/AllSites";
import CreateSite from "@views/CreateSite";
import AdminPanel from "@views/AdminPanel";

type RouteType = {
  path: string;
  element: ReactNode;
};

const AppRouter: React.FC = memo(() => {
  const publicRoutes: RouteType[] = [
    { path: "/", element: <StartPage /> },
    { path: "/auth", element: <Authentication /> },
  ];

  const privateRoutes: RouteType[] = [
    ...publicRoutes,
    ...[
      { path: "/cabinet", element: <AllSites /> },
      { path: "/admin", element: <AdminPanel /> },
      { path: "/create", element: <CreateSite /> },
    ],
  ];

  const location = useLocation();
  const isAuth = !!sessionStorage.getItem("userToken");

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
      <Navigate to="/" />
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
