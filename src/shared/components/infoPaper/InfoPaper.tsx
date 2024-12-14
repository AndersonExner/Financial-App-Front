import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface IInfoPaperProps {
    title: string;
    value: string;
    icon: SvgIconComponent;
    iconColor: string;
}

export const InfoPaper: React.FC<IInfoPaperProps> = ({ title, value, icon: IconComponent, iconColor = 'blue' }) => {
    const theme = useTheme();

    return (
        <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: theme.spacing(35) }} square={false}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box>
                    <Typography variant='h6' gutterBottom sx={{ color: 'text.secondary' }}>
                        {title}
                    </Typography>
                    <Typography variant='h5'>
                        {value}
                    </Typography>
                </Box>
                
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: theme.spacing(8),
                        height: theme.spacing(8),
                        borderRadius: '50%',
                        backgroundColor: iconColor,
                        color: 'white'
                    }}
                >
                    <IconComponent fontSize='large' />
                </Box>
            </Box>
        </Paper>
    );
};