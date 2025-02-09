import React from 'react';
import {Typography} from "@mui/material";
import Car from "@/components/UI/IconsComponents/Car";
import {DeliverStyled} from "@/components/UI/Deliver/styled";

const Deliver = ({price}) => {
  return (
    <DeliverStyled>
      <Car/>
      <Typography variant="subtitle3" color="main">{price}</Typography>
    </DeliverStyled>
  );
};

export default Deliver;