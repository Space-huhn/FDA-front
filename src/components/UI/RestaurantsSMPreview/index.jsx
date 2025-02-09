import React from 'react';
import ImageCover from "@/components/UI/ImageCover";
import {Typography} from "@mui/material";
import {RestaurantsSMPreviewStyled} from "@/components/UI/RestaurantsSMPreview/styled";
import Rating from "@/components/UI/Rating";

const RestaurantsSMPreview = ({imgSource, restaurantName, restaurantRating}) => {
  return (
      <RestaurantsSMPreviewStyled>
        {imgSource ?
            (<div className='imgWrapper'>
              <ImageCover src={imgSource} alt={restaurantName}/>
            </div>)
            :
            (<div className="image"/>)
        }

        <div className="restaurantShortInfo">
          <Typography variant="subtitle2">{restaurantName}</Typography>
          <Rating rating={restaurantRating}/>
        </div>
      </RestaurantsSMPreviewStyled>
  );
};

export default RestaurantsSMPreview;