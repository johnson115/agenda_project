import {   Divider , Drawer,Toolbar } from '@mui/material';




import React from 'react';

const Draweer = ({drawerWidth}) => {
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
    
      </Drawer>
  );
}

export default Draweer;
