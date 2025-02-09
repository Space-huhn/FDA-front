import React from 'react';
import {SmallCartStyled} from "@/components/UI/SmallCart/styled";
import ImageCover from "@/components/UI/ImageCover";

const SmallCart = ({image, children}) => {
  return (
    <SmallCartStyled>
      {image ?
        (<ImageCover src={image} alt={"sowwe"}/>)
        :
        (<div className="image"/>)
      }
      {children}
    </SmallCartStyled>
  );
};

export default SmallCart;