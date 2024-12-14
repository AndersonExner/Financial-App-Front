import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { useAppMenuContext } from "../shared/contexts";

export const AppRoutes = () => {
    const { setAppMenuOptions } = useAppMenuContext();

    useEffect(() => {
        setAppMenuOptions([
            {
                label: "Dashboard",
                icon: "home",
                path: "/dashboard"
            },
            {
                label: "Trasanctions",
                icon: "show_chart",
                path: "/transactions"
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
            <Route path="/dashboard" element={null} />
            <Route path="/transactions" element={null} />
        </Routes>
    );   
};