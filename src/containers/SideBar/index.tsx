import { SwipeableDrawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { sideBarItems } from '../../constants/sideBarItems';
import { NavLink } from 'react-router-dom';
import { DrawerWrapper } from './sideBar.styles';

type Props = {
    isOpen: boolean,
    handleClose: () => void
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const SideBar: React.FC<Props> = ({ isOpen, handleClose }) => {
    const theme = useTheme();
    return (
        <DrawerWrapper>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor='left'
                open={isOpen}
                onClose={handleClose}
            >
                <DrawerHeader>
                    <IconButton onClick={handleClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {sideBarItems.map((item, index) => (
                        <ListItem key={item?.id} component={NavLink} to={item?.path}>
                            <ListItemIcon>
                                {item?.icon}
                            </ListItemIcon>
                            <ListItemText primary={item?.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </DrawerWrapper>

    )
}

export default SideBar
