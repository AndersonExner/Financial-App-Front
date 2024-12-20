import React, { useState } from "react";
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Typography, Paper, TableContainer, IconButton, TablePagination } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export interface ITableValuesItem {
    id: number,
    description: string,
    value: number,
    date: string
};

interface TableValuesProps {
    headers: string[];
    data: ITableValuesItem[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export const TableValues: React.FC<TableValuesProps> = ({ headers, data, onEdit, onDelete }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
            <TableContainer component={Paper} sx={{ flex: 1, overflowY: 'auto' }}>
                <Table stickyHeader>
                    <TableHead sx={{ textAlign: 'center' }}>
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableCell
                                    key={index}
                                    sx={{
                                        fontWeight: 'bold',
                                        backgroundColor: '#f5f5f5',
                                        padding: '8px',
                                        textAlign: 'center'
                                    }}
                                >
                                    {header}
                                </TableCell>
                            ))}
                            <TableCell
                                sx={{
                                    fontWeight: 'bold',
                                    backgroundColor: '#f5f5f5',
                                    textAlign: 'right'
                                }}
                            >
                                Ações
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ padding: '5px', textAlign: 'center' }}>{item.description}</TableCell>
                                    <TableCell sx={{ padding: '5px', textAlign: 'center' }}>{item.value}</TableCell>
                                    <TableCell sx={{ padding: '5px', textAlign: 'center' }}>{item.date}</TableCell>
                                    <TableCell sx={{ padding: '5px', textAlign: 'right' }}>
                                        <IconButton onClick={() => onEdit(item.id)} color="primary">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => onDelete(item.id)} color="secondary">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={headers.length + 1}>
                                    <Typography align="center">No results found</Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};