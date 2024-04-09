import React from 'react';
import {FormContainerStyled} from "@/components/UI/FormContainer/styled";
import {Typography} from "@mui/material";

const FormContainer = ({title, subtitle, children}) => {
    return (
        <FormContainerStyled>
            <div className="top">
                <Typography variant="h2" fontFamily="Sen" fontWeight="fontWeightBold" fontSize="30px" lineHeight="42px" align="center" color="#fff">
                    {title}
                </Typography>
                <Typography variant="p" fontFamily="Sen" fontWeight="fontWeightRegular" fontSize="16px" lineHeight="26px" align="center" color="#fff">
                    {subtitle}
                </Typography>
            </div>

            <div className="formWrapper">
                {children}
            </div>
        </FormContainerStyled>
    )
};

export default FormContainer;