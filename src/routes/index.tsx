import React, { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { useAppMenuContext } from "../shared/contexts";
import { Dashboard } from "../pages/dashboard/Dashboard";

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
                label: "Receitas",
                icon: "payments",
                path: "/payments"
            },
            {
                label: "Despesas",
                icon: "money_off",
                path: "/expenses"
            },
            {
                label: "Configurações",	
                icon: "settings",
                path: "/settings"
            }
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/dashboard" element={< Dashboard />} />
            <Route path="/transactions" element={null} />

            <Route path="*" element={<Navigate to="/dashboard" /> } />
        </Routes>
    );   
};