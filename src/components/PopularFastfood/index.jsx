import React from 'react';
import SmallCart from "@/components/UI/SmallCart";
import {PopularFastFoodStyled} from "@/components/PopularFastfood/styled";
import {Typography} from "@mui/material";
import SmallFoodPreview from "@/components/UI/SmallFoodPreview";

const PopularFastFood = () => {
  return (
    <PopularFastFoodStyled>
      <SmallFoodPreview image="" restaurant="Uttora Coffe House" food="European Pizza"/>
      <SmallFoodPreview image="" restaurant="Cafenio Coffee Club" food="Buffalo Pizza."/>
      <SmallFoodPreview image="" restaurant="Cafenio Coffee Club" food="Buffalo Pizza."/>
    </PopularFastFoodStyled>
  );
};

export default PopularFastFood;