"use client"
import React, {useState} from 'react';
import {FormHelperText, FormLabel} from "@mui/material";
import {InfoOutlined} from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {InputStyled} from "@/components/UI/Input/styled";

const CustomInput = ({placeholder, label, type, onChange, value, name, error= {}}) => {

    const [toggleType, setToggleType] = useState(type)

    const toggleTypeFunction = () => {
        if (toggleType === "password") {
            setToggleType("text")
        } else {
            setToggleType("password")
        }
    }

    return (
        <InputStyled>
            <FormLabel className="label my-2">{label}</FormLabel>

            <div className="inputWrapper mt-2">
                <input type={`${toggleType}`}
                   name={name} value={value}
                   onChange={e => onChange(e.target.value, name)}
                   className="bg-gray-200 text-stile-900 p-3 rounded-lg text-base
                   placeholder-gray-400 text-blue-950 outline-1 focus:outline-gray-400 w-full"
                   placeholder={placeholder}/>

                {type === "password" ?
                    <button className={"showButton"} onClick={toggleTypeFunction}>
                        <VisibilityIcon className={"icon"} cursor={"pointer"}/>
                    </button>
                    : <span></span>}
            </div>

            {error.status ?
                <FormHelperText>
                    <InfoOutlined/>
                    {error.text}
                </FormHelperText>
                :
                <span></span>}
        </InputStyled>
    );
};

export default CustomInput;