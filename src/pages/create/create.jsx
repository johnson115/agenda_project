import "./create.css";
import React from "react";
import { InputAdornment, TextField, styled, Button } from "@mui/material";
import { Box } from "@mui/system";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.johnson.main,
  "&:hover": {
    backgroundColor: purple[700],
    scale:"0.97",
  },
}));
const Create = () => {
  return (
    
    <Box component="form" width="370px">
      <TextField
        fullWidth
        label="With normal TextField"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        fullWidth
        label="With normal TextField"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton varient="contained"  sx={{mt:"30px", width: "130px"}}>
        Submit <ChevronRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
