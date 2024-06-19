import "./create.css";
import React, { useState } from "react";
import { InputAdornment, TextField, styled, Button } from "@mui/material";
import { Box } from "@mui/system";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";




const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.johnson.main),
  backgroundColor: theme.palette.johnson.main,
  "&:hover": {
    backgroundColor: theme.palette.johnson.light,
    scale:"0.97",
  },
}));


const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate=useNavigate();
  return (
    
    <Box noValidate
    autoComplete="off" component="form" width="370px">
      <TextField
      onChange={(eo) => {
        settitle(eo.target.value);
      }}
        fullWidth
        label="With normal TextField"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        
        variant="filled"
      />

      <TextField
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth
        label="  Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton onClick={() => {
        fetch("http://localhost:3100/myData",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price, title }),
        });
        navigate("/");
        

      }} varient="contained"  sx={{mt:"30px", width: "130px"}}>
        Submit <ChevronRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
