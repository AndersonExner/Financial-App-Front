import React, { useEffect } from "react";

import { useAppMenuContext } from "../shared/contexts";
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
                label: "Settings",
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
            <Route path="/dashboard" element={<h1>dashboard</h1>} />
        </Routes>
    );   
};