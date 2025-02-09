import React from 'react';
import Clock from "@/components/UI/IconsComponents/Clock";
import {Typography} from "@mui/material";
import {DeliverTimeStyled} from "@/components/UI/DeliverTime/styled";

const DeliverTime = ({time}) => {
  return (
    <DeliverTimeStyled>
      <Clock/>
      <Typography variant="subtitle3" color="main">{time}</Typography>
    </DeliverTimeStyled>
  );
};

export default DeliverTime;