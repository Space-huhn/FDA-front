'use client'
import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Favorite from "@/components/UI/IconsComponents/Favorite";

const AddToFavorite = ({product}) => {
  const [state, setState] = useState(product.favorite)

  const toggleAddToFavorite = () => {
    setState(prev => !prev);
  }

  return (
    <Button style={{position: 'absolute', bottom: '20px', right: '20px',}} variant="rounded" color="canvas" onClick={toggleAddToFavorite}>
      <Favorite state={state}/>
    </Button>
  );
};

export default AddToFavorite;