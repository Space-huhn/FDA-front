import React from 'react';
import {CustomLinkStyled} from "@/components/UI/CustomLink/v1/styled";

const CustomLink = (props) => {
  return (
    <CustomLinkStyled
      {...props}
      style={ props.uppercase ? {textTransform: 'uppercase'} : {}}
    >
      {props.children}
    </CustomLinkStyled>
  );
};

export default CustomLink;