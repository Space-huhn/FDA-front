import React, {useState} from 'react';
import QuantityCounter from "@/components/UI/QuantityCounter";
import {AddToCartStyled} from "@/components/AddToCart/styled";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

const AddToCart = () => {
  const [count, setCount] = useState('1');
  const [price, setPrice] = useState('32');
  const [inCart, setInCart] = useState(false)

  return (
    <AddToCartStyled>
      <div className="flexWrapAddToCart">
        <Typography variant="h3" color="dark">${price * count}</Typography>

        {!inCart &&
          <QuantityCounter setCount={setCount} quantity={count}/>
        }
      </div>

      {inCart ?
        <Link href={'/'}>
          <Typography variant='subtitle1' textDecoration='underline' color='companyAccentMain'>
            Go to cart
          </Typography>
        </Link>
      :
        <Button onClick={() => setInCart(true)} variant="contained">Add to cart</Button>
      }
    </AddToCartStyled>
  );
};

export default AddToCart;