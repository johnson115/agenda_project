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
  const mylist=[
    {text:"home" , icon: <HomeIcon /> , path: "/" },
    {text:"create" , icon: <CreateIcon /> , path: "/create" },
    {text:"profile" , icon: <Person2Icon />, path: "/profile" },
    {text:"settings" , icon: <SettingsIcon /> , path: "/settings" },
  ]
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


{mylist.map((item) => {
  return(
  <ListItem
          disablePadding
          sx={{
            backgroundColor:
              currentlocation.pathname === item.path
                ? theme.palette.favcolor.main
                : null,
          }}
        >
          <ListItemButton
            onClick={() => {
              Navigate(item.path);
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem> 
        )
})}











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
