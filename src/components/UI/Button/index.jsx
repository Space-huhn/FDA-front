"use client"
import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage({children, type, variant, onClick}) {
  return (
    <Button
      type={type}
      variant={variant}
      size="large"
      onClick={onClick}
    >
      <span>
        {children}
      </span>
    </Button>
  )
}