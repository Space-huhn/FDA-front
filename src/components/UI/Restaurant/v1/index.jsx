import React from 'react';
import {RestaurantStyled} from "@/components/UI/Restaurant/v1/styled";
import ImageCover from "@/components/UI/ImageCover";
import {Typography} from "@mui/material";
import Star from "@/components/UI/IconsComponents/Star";
import Car from "@/components/UI/IconsComponents/Car";
import Clock from "@/components/UI/IconsComponents/Clock";
import Rating from "@/components/UI/Rating";
import Deliver from "@/components/UI/Deliver/Deliver";
import DeliverTime from "@/components/UI/DeliverTime";
import DeliverInfo from "@/components/UI/DeliverInfo";

const Restaurant = ({restaurantImg}) => {
  return (
    <RestaurantStyled>
      {restaurantImg ? (
        <div className='imgWrapper'>
          <ImageCover src={restaurantImg}/>
        </div>
      ) : (
        <div className='imgWrapper'></div>
      )}

      <Typography variant="subtitle1" textTransform="capitalize" color="dark">
        rose garden restaurant
      </Typography>

      <Typography variant="subtitle2" textTransform="capitalize" color="main">
        Burger - Chiken - Riche - Wings
      </Typography>

      <DeliverInfo info={{rating: "4.7", price: "Free", time: "20 min"}}/>

    </RestaurantStyled>
  );
};

export default Restaurant;