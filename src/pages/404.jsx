import { Typography } from "@mui/material";

import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import React from "react";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h3" color={theme.palette.error.main}>
        This Page not Designet yet
        <br />
        <br />
        Try Again later please ...
      </Typography>
    </Box>
  );
};

export default NotFound;
