import React from "react";
import { InfoPaper } from "../../shared/components/infoPaper/InfoPaper";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Box } from "@mui/material";

export const Dashboard = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <InfoPaper title="Saldo Atual" value="R$ 1.000,00" icon={AccountBalanceRoundedIcon} iconColor="blue" />
            <InfoPaper title="Receitas" value="R$ 500,00" icon={ArrowUpwardRoundedIcon} iconColor="green" />
            <InfoPaper title="Investimentos" value="R$ 300,00" icon={ArrowUpwardRoundedIcon} iconColor="purple"/>
            <InfoPaper title="Despesas" value="R$ 200,00" icon={ArrowDownwardRoundedIcon} iconColor="red" />
        </Box>
    );
};