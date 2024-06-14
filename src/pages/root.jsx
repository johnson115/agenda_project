

import { Outlet } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Draweer from '../MUIcomponents/draweer';
import Appbar from '../MUIcomponents/appbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from 'react';
import "../index.css" ;



const drawerWidth=240;
const Root = () => {
const [mode, setmymode] = useState(
  localStorage.getItem("currentMode")=== null ? "light" :
  localStorage.getItem("currentMode")=== "light" ? "light" : "dark");
const darkTheme = createTheme({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          johnson:{
            main: '#1e88e5',
            contrastText: '#fff',
          },
          favcolor:{
            main:"#64b5f6",
          }
        }
      : {
          // palette values for dark mode
          johnson:{
            main: '#f44336',
            light:'#e64a19',
            contrastText: '#fff',
          }, 
          favcolor:{
            main:"#c62828",
          }
        }),
  },
});
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
     <Box sx={{ flexGrow: 1 }}>
      <Appbar drawerWidth={drawerWidth} />
    <Draweer setmymode={setmymode} drawerWidth={drawerWidth}/>
    </Box>
  <Box component="main" sx={{marginLeft:`${drawerWidth}px`,mt:"100px" , display: "flex" , justifyContent:"center" }} className="hwew" >
      <Outlet />
  </Box >
  </ThemeProvider>
    </>
  );
}

export default Root;
