import React from 'react';
import {Typography} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ExceptionMessage = ({children}) => {
    return (
        <Typography variant="warning">
            <ErrorOutlineIcon fontSize="large"/>
            {children}
        </Typography>
    )
};

export default ExceptionMessage;