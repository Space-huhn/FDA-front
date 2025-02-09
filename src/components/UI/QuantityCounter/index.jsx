import React from 'react';
import Minus from "@/components/UI/IconsComponents/Minus";
import Plus from "@/components/UI/IconsComponents/Plus";
import {QuantityCounterStyled} from "@/components/UI/QuantityCounter/styled";
import {Typography} from "@mui/material";

const QuantityCounter = ({quantity, setCount}) => {
  const setCountHandler = (operation) => {
    setCount(prev => {
        if (operation === "-" && prev <= 1 || operation === "+" && prev >= 9) return prev;

        if (operation === "-") return --prev;

        if (operation === "+") return ++prev;
      }
    )
  }

  return (
    <QuantityCounterStyled>
      <button onClick={() => setCountHandler('-')} className="decrementQuantity">
        <Minus/>
      </button>
      <Typography variant="h3" textTransform="uppercase" color="light">
        {quantity}
      </Typography>
      <button onClick={() => setCountHandler('+')} className="incrementQuantity">
        <Plus/>
      </button>
    </QuantityCounterStyled>
  );
};

export default QuantityCounter;