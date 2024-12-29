import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

import { TableValues, ITableValuesItem } from "../../shared/components/Table/Table";

const initialData: ITableValuesItem[] = [
    { id: 1, description: "Item 1", value: 100, date: "2023-01-01" },
    { id: 2, description: "Item 2", value: 200, date: "2023-01-02" },
    { id: 3, description: "Item 3", value: 300, date: "2023-01-03" },
    { id: 4, description: "Item 4", value: 400, date: "2023-01-04" },
    { id: 5, description: "Item 5", value: 500, date: "2023-01-05" },
    { id: 6, description: "Item 6", value: 600, date: "2023-01-06" },
    { id: 7, description: "Item 7", value: 700, date: "2023-01-07" },
    { id: 8, description: "Item 8", value: 800, date: "2023-01-08" },
    { id: 9, description: "Item 9", value: 900, date: "2023-01-09" },
    { id: 10, description: "Item 10", value: 1000, date: "2023-01-10" },
];

export const Payments: React.FC = () => {
    const [data, setData] = useState<ITableValuesItem[]>([]);
    const [description, setDescription] = useState<string>("");
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        setData(initialData);
    }, []);

    const addNewItem = () => {
        if (!description || !value) {
            return;
        }

        const newItem: ITableValuesItem = {
            id: data.length + 1,
            description,
            value,
            date: new Date().toISOString().split("T")[0]
        };

        setData([...data, newItem]);
        setDescription("");
        setValue(0);
    };

    const handleEdit = (id: number) => {
        // Implementar lógica de edição
        console.log(`Edit item with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        setData(data.filter(item => item.id !== id));
    };

    return (
        <Box>
            <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
                    <FormControl sx={{ width: '50%' }}>
                        <InputLabel htmlFor="description">Descrição</InputLabel>
                        <OutlinedInput
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            label="Descrição"
                        />
                    </FormControl>
                    <FormControl sx={{ width: '20%' }}>
                        <InputLabel htmlFor="value">Valor</InputLabel>
                        <OutlinedInput
                            id="value"
                            type="number"
                            value={value}
                            onChange={(e) => setValue(Number(e.target.value))}
                            label="Valor"
                        />
                    </FormControl>
                    <Button variant="contained" color="success" size="large" sx={{ height: 'fit-content' }} onClick={addNewItem}>
                        Adicionar
                    </Button>
                </Box>
            <TableValues headers={["Descrição", "Valor", "Data"]} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
    );
};