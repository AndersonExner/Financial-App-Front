import { Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppMenuContext } from '../../contexts';
import { blue } from '@mui/material/colors';

interface IAppMenuItemProps {
    label: string;
    icon: string
    to: string;
    onClick: () => void | undefined;
}

const AppMenuItem: React.FC<IAppMenuItemProps> = ({ label, icon, to, onClick }) => {
    
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        navigate(to);
    };

    return (
        <ListItemButton onClick={handleClick} selected={!!match}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}

interface IAppMenuProps {
    children: React.ReactNode;
}

export const AppMenu : React.FC <IAppMenuProps> = ({ children }) => {
    
    const { isOpen, options, toogleAppMenuOpen } = useAppMenuContext();
    return (
        <>
            <Drawer open={isOpen} onClose={toogleAppMenuOpen}>
                <Box width={300} display={'flex'} flexDirection={'column'} height={'100%'}>

                    <Box width="100%" height={'20%'} display="flex" alignItems="center" justifyContent="center" bgcolor={blue}>  
                        <h1>Avatar</h1>
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component={'nav'}>
                            {options.map(item => (
                              <AppMenuItem
                                key={item.path}
                                label={item.label}
                                icon={item.icon}
                                to={item.path}
                                onClick={toogleAppMenuOpen}
                              />  
                            ))}
                        </List>
                    </Box>
                </Box>

            </Drawer>
            <Box height="100vh" marginLeft="30vw">
                { children}
            </Box>
        </>
    );
};