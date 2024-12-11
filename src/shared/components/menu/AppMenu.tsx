import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppMenuContext, useAppThemeContext } from '../../contexts';

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
    
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isOpen, options, toogleAppMenuOpen } = useAppMenuContext();
    const { toggleTheme } = useAppThemeContext();

    return (
        <>
            <Drawer open={isOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toogleAppMenuOpen}>
                <Box width={theme.spacing(28)} display={'flex'} flexDirection={'column'} height={'100%'}>

                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">  
                        <Avatar sx={{ height:theme.spacing(12), width:theme.spacing(12)}}/>
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

                    <Box>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>logout</Icon>
                                </ListItemIcon>
                                <ListItemText primary="LogOut" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>

            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                { children }
            </Box>
        </>
    );
};