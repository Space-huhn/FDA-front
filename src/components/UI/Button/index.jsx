"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

export default function ButtonUsage({children, type, color, onClick}) {
    return (
        <Button color={color} variant={type} size="large" onClick={onClick}>
                {children}
        </Button>
    )
}