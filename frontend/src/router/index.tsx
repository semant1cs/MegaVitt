import React, {ReactNode} from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Welcome from "@components/Welcome/Welcome.container";

type RouteType = {
    path: string,
    element: ReactNode,
}

const AppRouter: React.FC = () => {
    const publicRoutes: RouteType[] = [
        {
            path: "/",
            element: <Welcome/>
        },
    ]

    const privateRoutes: RouteType[] = [
        {
            path: "/",
            element: <Welcome/>
        },
    ]

    const location = useLocation()
    const isAuth = true

    return (
        isAuth ?
            (
                privateRoutes.findIndex(comp => comp.path === location.pathname) !== -1
                    ?
                    <Routes>
                        {
                            privateRoutes.map(({path, element}, index) =>
                                <Route path={path} element={element} key={index}/>
                            )
                        }
                    </Routes>
                    :
                    <Navigate to="/personalArea"/>

            ) :
            (
                publicRoutes.findIndex(comp => comp.path === location.pathname) !== -1
                    ?
                    <Routes>
                        {
                            publicRoutes.map(({path, element}, index) =>
                                <Route path={path} element={element} key={index}/>
                            )
                        }
                    </Routes>
                    :
                    <Navigate to="/"/>
            )
    );
};

export default AppRouter;