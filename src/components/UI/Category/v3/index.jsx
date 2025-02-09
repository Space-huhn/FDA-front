import React, {useState} from 'react';
import {CategoryStyled} from "@/components/UI/Category/v3/styled";
import {Typography} from "@mui/material";
import ImageCover from "@/components/UI/ImageCover";

const Category = ({categoryName, categoryImg, activeCategories, toggleCategories}) => {
  const toggleActive = () => {
    toggleCategories(categoryName);
  }

  return (
    <CategoryStyled
      className={activeCategories?.includes(categoryName) && 'active'}
      onClick={toggleActive}
    >
      <div className="categoryCart">
      {
        categoryImg ?
          (<div className='imgWrapper'>
            <ImageCover src={categoryImg} alt={categoryName}/>
          </div>)
          :
          (<div className="image"/>)
      }
      </div>
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