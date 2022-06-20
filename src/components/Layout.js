import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, AppBar, Toolbar, Avatar } from '@mui/material';
import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {format} from 'date-fns';


const drawerWidth = 240;



const Layout = ({children}) => {

    const navigate = useNavigate();

    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="primary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color="primary" />,
            path: '/create'
        },
    ]

  return (

    <div style={{backgroundColor:'#f9f9f9', width:'100%', display:'flex', padding: '24px'}}>

        <AppBar sx={{width: `calc(100% - ${drawerWidth}px)`}} elevation={0}>
            <Toolbar>
                <Typography sx={{flexGrow: 1}}>
                    Today is the {format(new Date(), 'do MMMM y')}
                </Typography>
                <Typography>
                    Calvin
                </Typography>
                <Avatar src='/avatar.JPG' sx={{marginLeft: '16px'}}/>
            </Toolbar>
        </AppBar>

        <Drawer 
            sx={{width: drawerWidth, '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'}}} 
            variant='permanent' 
            anchor='left'
        >
            <div>
                <Typography variant="h5" sx={{padding: '16px'}}>
                    Dr.Chuks Notes
                </Typography>
            </div>

            <List>
                {menuItems.map((item) => (
                    <ListItem 
                        key={item.text} 
                        button 
                        onClick={() => navigate(item.path)}
                        sx={{
                              backgroundColor: location.pathname === item.path ? '#f4f4f4' : null
                            }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

        </Drawer>

        <div sx={{backgroundColor: '#f9f9f9', width: '100%', padding: '24px'}}>
            <div style={{height: '80px'}}></div>
            {children}
        </div>

    </div>

  )

};

export default Layout;