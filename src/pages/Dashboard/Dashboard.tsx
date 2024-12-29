import React from "react";
import Box from "@mui/material/Box";
import { ArrowUpwardRounded as ArrowUpwardRoundedIcon, AccountBalanceRounded as AccountBalanceRoundedIcon, ArrowDownwardRounded as ArrowDownwardRoundedIcon } from '@mui/icons-material';

import { InfoPaper } from "../../shared/components/infoPaper/InfoPaper";
import { PieGraph } from "../../shared/components/Graphs/PieGraph";

const receitas = [
    { label: 'Salário', value: 1500 },
    { label: 'Freelance', value: 1000 },
    { label: 'Investimentos', value: 700 },
    { label: 'Outros', value: 300 },
];

const despesas = [
    { label: 'Aluguel', value: 1000 },
    { label: 'Transporte', value: 500 },
    { label: 'Alimentação', value: 500 },
    { label: 'Lazer', value: 250 },
];

const totalReceitas = receitas.reduce((acc, curr) => acc + curr.value, 0);
const totalDespesas = despesas.reduce((acc, curr) => acc + curr.value, 0);

const receitasPercentual = receitas.map((item) => ({
    ...item,
    value: Number.parseFloat(((item.value / totalReceitas) * 100).toFixed(2)),
}));

const despesasPercentual = despesas.map((item) => ({
    ...item,
    value: Number.parseFloat(((item.value / totalDespesas) * 100).toFixed(2)),
}));

export const valueFormatter = (item: { value: number }) => `${item.value}%`;

export const Dashboard = () => {
    return (
        <>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <InfoPaper title="Saldo Acumulado" value="R$ 1.250,00" icon={AccountBalanceRoundedIcon} iconColor="blue" />
                <InfoPaper title="Receitas" value="R$ 3.500,00" icon={ArrowUpwardRoundedIcon} iconColor="green" />
                <InfoPaper title="Despesas" value="R$ 2.250,00" icon={ArrowDownwardRoundedIcon} iconColor="red" />
                <InfoPaper title="Resultado Mês" value="R$ 2.250,00" icon={ArrowDownwardRoundedIcon} iconColor="red" />
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" mt={2}>
                <PieGraph titulo={"Receitas"} data={receitasPercentual} height={300} width={'45%'} valueFormatter={valueFormatter} />
                <PieGraph titulo={"Despesas"} data={despesasPercentual} height={300} width={'45%'} valueFormatter={valueFormatter} />
            </Box>
        </>
    );
};