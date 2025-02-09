import React from 'react';
import Link from "next/link";
import {MenuItem, Typography} from "@mui/material";

const DropDownMenuItem = ({handelAction, url}) => {
  return (
    <MenuItem onClick={handelAction}>
      <Link href={url}>
        <Typography variant="subtitle2">
          My account
        </Typography>
      </Link>
    </MenuItem>
  );
};

export default DropDownMenuItem;