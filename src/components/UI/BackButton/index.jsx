import React from 'react';
import BackButtonIcon from "@/components/UI/BackButtonIcon";
import Button from "@mui/material/Button";

const BackButton = ({onClick}) => {
  return (
    <Button style={{width: 'auto'}} onClick={onClick}>
      <BackButtonIcon/>
    </Button>
  );
};

export default BackButton;