import React from 'react';
import {CustomLinkStyled} from "@/components/UI/CustomLink/v2/styled";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CustomLink = (props) => {
  return (
    <CustomLinkStyled {...props}>
      <div>
        {props.children}
      </div>
      <OpenInNewIcon/>
    </CustomLinkStyled>
  );
};

export default CustomLink;