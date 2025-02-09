import React from 'react';
import {Typography} from "@mui/material";
import {IngredientStyled} from "@/components/UI/Ingredient/styled";

const Ingredient = ({title, icon}) => {
  return (
    <IngredientStyled>
      <div className="ingredientIcons">
        {icon}
      </div>

      <Typography>
        {title}
      </Typography>
    </IngredientStyled>
  );
};

export default Ingredient;