import React from 'react';
import SmallCart from "@/components/UI/SmallCart";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Plus from "@/components/UI/IconsComponents/Plus";

const FoodPreview = ({image, food, restaurant, price}) => {
  return (
    <SmallCart image={image}>
      <Typography variant="h4" color="darker" >{food}</Typography>
      <Typography variant="subtitle4" color="main" >{restaurant}</Typography>
      <div className="flex">
        <Typography  variant="h3" color="darker">{price}</Typography>
        <Button variant="rounded">
          <Plus/>
        </Button>
      </div>
    </SmallCart>
  );
};

export default FoodPreview;