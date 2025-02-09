'use client'
import React, {useState} from 'react';
import {Typography} from "@mui/material";
import {useMultipleToggle, useMultipleToggleWithReset, useToggleExclusive} from "@/utils/hooks/hooks";
import Category from "@/components/UI/Category/v4";
import Ingredient from "@/components/UI/Ingredient";
import {ingredients} from "@/static/ingredients";
import DetailsView from "@/components/DetailsView/v2";
import {DetailsStyled} from "@/app/[lang]/(DefaultLayout)/details/styled";

const sizes = ['10', '14', '16', '21', '46'];
const product = {image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/14/full/1694673859-4182.jpeg?im=FeatureCrop'};
const info = {rating: "4.7", price: "Free", time: "20 min"};

const Details = () => {
  const [val1, setVal1] = useToggleExclusive('10');




  return (
    <DetailsView image={product.image} ratingInfo={info}
                 title={"Pizza Calzone European"}
                 description={"Prosciutto e funghi is a pizza variety that is topped with tomato sauce."}>

      <DetailsStyled>
        <div className="productSize">
          <Typography variant="subtitle2" textTransform="uppercase" color="dark">
            Size:
          </Typography>

          {
            sizes.map((size) => (
              <div onClick={() => setVal1(size)}>
                <Category categoryName={`${size}"`} active={val1.includes(size)}/>
              </div>
            ))
          }
        </div>

        <div className="ingredients">
          <Typography variant="subtitle2" textTransform="uppercase" color="dark">
            Ingredients
          </Typography>

          <ul className="ingredientsList">
            {ingredients.map(element => (
              <li>
                <Ingredient icon={element.icon} title={element.name}/>
              </li>
            ))}
          </ul>
        </div>
      </DetailsStyled>
    </DetailsView>
  );
};

export default Details;