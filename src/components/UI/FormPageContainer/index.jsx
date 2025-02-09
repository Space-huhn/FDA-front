import React from "react";
import {FormContainerStyled} from "@/components/UI/FormPageContainer/styled";
import {Typography} from "@mui/material";
import Link from "next/link";
import BackButton from "@/components/UI/BackButton";

const FormPageContainer = ({title, subtitle, children}) => {
  return (
    <FormContainerStyled>
      <div className="top">
        <Typography
          variant="h1"
          color="light"
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle2"
          color="light"
        >
          {subtitle}
        </Typography>
      </div>

      <div className="formWrapper">
        {children}
      </div>
    </FormContainerStyled>
  )
};

export default FormPageContainer;