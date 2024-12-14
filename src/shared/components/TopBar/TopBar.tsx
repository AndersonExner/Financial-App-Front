import React, { useState } from 'react';
import { Box, Icon, IconButton, TextField, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppMenuContext } from '../../contexts';

export const TopBar: React.FC = () => {
    const theme = useTheme();
    const [search, setSearch] = useState('');

    const { isOpen, options, toogleAppMenuOpen } = useAppMenuContext();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <Toolbar variant='regular' sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: theme.palette.background.default }}>
            <IconButton onClick={toogleAppMenuOpen}> 
                <Icon fontSize='large'>{isOpen ? 'menu_open' : 'menu'}</Icon>
            </IconButton>
            <Box flexGrow={1} ml={4}>
                <TextField
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Pesquisar..."
                    variant="outlined"
                    size="small"
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '4px',
                    }}
                />
            </Box>
        </Toolbar>
    );
};