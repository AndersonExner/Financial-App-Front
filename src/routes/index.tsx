import React, { useEffect } from "react";

import { useAppMenuContext } from "../shared/Contexts";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    const { setAppMenuOptions } = useAppMenuContext();

    useEffect(() => {
        setAppMenuOptions([
            {
                label: "Home",
                icon: "home",
                path: "/home"
            },
            {
                label: "Dashboard",
                icon: "show_chart",
                path: "/dashboard"
            },
            {
                label: "Accounts",
                icon: "manage_accounts",
                path: "/settings"
            },
            {
                label: "Settings",
                icon: "settings",
                path: "/settings"
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/" element={null} />
            <Route path="/dashboard" element={null} />
        </Routes>
    );   
};