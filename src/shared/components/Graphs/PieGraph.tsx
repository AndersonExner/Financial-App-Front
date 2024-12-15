import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { Paper } from "@mui/material";

interface IPieGraphProps {
    data: { label: string; value: number }[];
    height: number;
    width: string | number;
    valueFormatter: (item: { value: number }) => string;
}

export const PieGraph: React.FC<IPieGraphProps> = ({ data, height = 200, width, valueFormatter }) => {
    return (
        <Paper sx={{ p: 2, width: width  }} elevation={3}>
            <PieChart
                series={[
                    {
                        data: data,
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        innerRadius: 50,
                        outerRadius: 120,
                        valueFormatter: valueFormatter
                    },
                ]}
                height={height}
            />
        </Paper>
    );
};