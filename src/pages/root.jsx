import { Outlet } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";
import Draweer from "../MUIcomponents/draweer";
import Appbar from "../MUIcomponents/appbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import "../index.css";
import GetDesignTokens from "./styles/mytheme";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmymode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = React.useMemo(() => createTheme(GetDesignTokens(mode)), [mode]);
  const [perman, setPerman] = useState("permanent");
  const [Hide, setHide] = useState("none");
  const showDrawer=()=>{
    setHide( "block" );
    setPerman( "temporary" );
  }
  const hideDrawer=()=>{
    setHide("none");
    setPerman( "permanent" );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Appbar
          showDrawer={showDrawer}
          />
          <Draweer
            hide={Hide}
            setmymode={setmymode}
            drawerWidth={drawerWidth}
            varion={perman}
            hideDrawer={hideDrawer}
          />
        </Box>
        <Box
          component="main"
          sx={{
          
            mt: "100px",
            display: "flex",
            justifyContent: "center",
          }}
          className="hwew"
        >
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Root;
