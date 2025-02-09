import React from 'react';
import {Typography} from "@mui/material";
import SmallCart from "@/components/UI/SmallCart";

const SmallFoodPreview = ({image, restaurant, food}) => {
  return (
    <SmallCart image={image}>
      <Typography variant="h4" color="darker" >{food}</Typography>
      <Typography variant="subtitle4" color="main" >{restaurant}</Typography>
    </SmallCart>
  );
};

export default SmallFoodPreview;