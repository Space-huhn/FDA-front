import React from 'react';
import Star from "@/components/UI/IconsComponents/Star";
import {Typography} from "@mui/material";
import {RatingStyled} from "@/components/UI/Rating/styled";

const Rating = ({rating}) => {
  return (
    <RatingStyled>
      <Star/>
      <Typography variant="h3" color="darker">{rating}</Typography>
    </RatingStyled>
  );
};

export default Rating;