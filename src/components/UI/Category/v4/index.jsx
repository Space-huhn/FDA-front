import React from 'react';
import {CategoryStyled} from "@/components/UI/Category/v4/styled";
import {Typography} from "@mui/material";
import ImageCover from "@/components/UI/ImageCover";

const Category = ({categoryName, active}) => {

  return (
    <CategoryStyled
      className={active && 'active'}
    >
        <Typography
          variant="h4"
          color="dark"
        >
          {categoryName}
        </Typography>
    </CategoryStyled>
  )
};

export default Category;