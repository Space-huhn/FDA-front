import React from 'react';
import {DetailsViewStyled} from "@/components/DetailsView/v1/styled";
import ImageCover from "@/components/UI/ImageCover";
import AddToFavorite from "@/components/UI/AddToFavorite";
import {Typography} from "@mui/material";
import DeliverInfo from "@/components/UI/DeliverInfo";
import Category from "@/components/UI/Category/v4";
import {ingredients} from "@/static/ingredients";
import Ingredient from "@/components/UI/Ingredient";
import AddToCart from "@/components/AddToCart";

const DetailsView = ({image, title, description, ratingInfo, children}) => {
  return (
    <DetailsViewStyled>
      <div className="detailsImgWrapper">
        {image ?
          <ImageCover src={image} alt={"Alt"}/>
          :
          (<div className="detailsImg"/>)
        }
        <AddToFavorite product/>
      </div>

      <div className="detailsInfo">
        <div className="title">
          <Typography variant="h2" color="darker">
            {title}
          </Typography>
        </div>

        <Typography variant="subtitle2" color="main">
          {description}
        </Typography>

        <DeliverInfo info={{rating: ratingInfo.rating, price: ratingInfo.price, time: ratingInfo.time}}/>

        {children}

        <AddToCart/>
      </div>
    </DetailsViewStyled>
  );
};

export default DetailsView;