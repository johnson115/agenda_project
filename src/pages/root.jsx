

import { Outlet } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Draweer from '../MUIcomponents/draweer';
import Appbar from '../MUIcomponents/appbar';
import "../index.css" ;


const drawerWidth=240;
const Root = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <Appbar drawerWidth={drawerWidth} />
    <Draweer drawerWidth={drawerWidth}/>
    </Box>
  <Box sx={{marginLeft:`${drawerWidth}px`, display: "flex" , justifyContent:"center" }} className="hwew" >
      <Outlet />
  </Box >
    </>
  );
}

export default Root;
