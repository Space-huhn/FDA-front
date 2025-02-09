import React from 'react';
import {ImageCoverStyled} from "@/components/UI/ImageCover/styled";

const ImageCover = ({src, alt}) => {

  return (
    <ImageCoverStyled
      // style={{background: `url(${src}) 50% 50%/cover no-repeat`}}
    >
      <img
        src={src}
        alt={alt}
      />
    </ImageCoverStyled>
  )
};

export default ImageCover;