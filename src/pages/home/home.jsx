import "./home.css";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [mydata, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/myData")
    .then((response) => response.json())
    .then((data) => setdata(data) )
  }, []);
  return (
    <Box>
      {mydata.map((item) => {
        return(
          <Paper
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            width: "366px",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }}
        >
          <Typography varient="h6" sx={{ ml: "16px", fontSize:"1.3em" }}>
            {item.title}
          </Typography>
          <Typography varient="h6" sx={{ mr: "33px", fontSize:"1.4em", opacity :"0.7" }}>
            {item.price}$
          </Typography>
          <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
            <CloseIcon sx={{fontSize:"20px"}}/>
          </IconButton>
        </Paper>
        )
      })}
      
      
    </Box>
  );
};

export default Home;
