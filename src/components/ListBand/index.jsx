"use client";
import React, {useState} from 'react';
import {ListBandStyled} from "@/components/ListBand/styled";
import {Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Category from "@/components/UI/Category/v1";
import Restaurant from "@/components/UI/Restaurant/v1";
import RecentKeywords from "@/components/UI/RecentKeywords";
import SuggestedRestaurants from "@/components/SuggestedRestaurants";
import PopularFastFood from "@/components/PopularFastfood";
import {useMultipleToggleWithReset} from "@/utils/hooks/hooks";
import {categories} from "@/static/categories"

const ListBand = () => {
  const [value, setValue] = useMultipleToggleWithReset(['All'], 'All');

  return (
    <ListBandStyled>
      <RecentKeywords arrayOfKeywords={["Burger", "Sandwich", "Pizza", "Sandwich"]}/>
      <SuggestedRestaurants/>
      <PopularFastFood/>

      <div className="categoryHeader">
        <Typography variant="subtitle1" color="dark">
          All Categories
        </Typography>
        <div className="seeAllButton">
          <Typography variant="subtitle2" color="dark">
            See All
          </Typography>
          <ArrowForwardIosIcon fontSize="10px"/>
        </div>
      </div>

      <div className="categories">
        {categories.map(category => (
          <Category onClick={() => setValue(category.name)}
                    categoryName={category.name} activeCategories={value}/>
        ))}
      </div>

      <div className="categoryHeader">
        <Typography variant="subtitle1" color="dark">
          Open Restaurants
        </Typography>
        <div className="seeAllButton">
          <Typography variant="subtitle2" color="dark">
            See All
          </Typography>
          <ArrowForwardIosIcon fontSize="10px"/>
        </div>
      </div>

      <div className="restaurants">
        <Restaurant
          restaurantImg={'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original'}/>
        <Restaurant/>
        <Restaurant/>
        <Restaurant
          restaurantImg={'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original'}/>
        <Restaurant
          restaurantImg={'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original'}/>
        <Restaurant
          restaurantImg={'https://media.cnn.com/api/v1/images/stellar/prod/220428140436-04-classic-american-hamburgers.jpg?c=original'}/>
        <Restaurant/>
      </div>
    </ListBandStyled>
  )
};

export default ListBand;