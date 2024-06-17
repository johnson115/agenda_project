import { Divider, Drawer, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import { useTheme } from "@emotion/react";

const Draweer = ({ drawerWidth, setmymode, hide, varion,  hideDrawer}) => {
  const currentlocation = useLocation();
  const Navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        display: { xs: hide, md: hide },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      open={true}
      onClose= { () => {
        hideDrawer()
      }}
      variant={varion}
      anchor="left"
      
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center" }}
          disablePadding
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setmymode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon sx={{ color: "orange" }} />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ListItem>

        <Divider />
        <ListItem
          disablePadding
          sx={{
            backgroundColor:
              currentlocation.pathname === "/"
                ? theme.palette.favcolor.main
                : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              Navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            backgroundColor:
              currentlocation.pathname === "/create"
                ? theme.palette.favcolor.main
                : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              Navigate("/create");
            }}
          >
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Draweer;
