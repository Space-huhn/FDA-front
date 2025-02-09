"use client"
import {InputStyled} from "@/components/UI/Input/styled";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {FormLabel} from "@mui/material";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";


const CustomInput = ({placeholder, label, type, register, name, required, error}) => {
  const {handleSubmit, control} = useForm()
  const [toggleType, setToggleType] = useState(type);

  const toggleTypeFunction = () => {
    if (toggleType === "password") {
      setToggleType("text")
    } else {
      setToggleType("password")
    }
  }

  return (
    <InputStyled>
      <FormLabel>
        {label}
      </FormLabel>

      <div className="inputWrapper">
        <Controller
          control={control}
          name={name}
          render={() => (
            <input
              type={`${toggleType}`}
              {...register(name, {required: required})}
              className={`input ${error ? "error" : "valid"}`}
              placeholder={placeholder}/>
          )}
        />

        {type === "password" && (
          <button className="showButton" onClick={toggleTypeFunction}>
            {toggleType === "text"
              ?
              <VisibilityIcon className="icon" cursor="pointer"/>
              :
              <VisibilityOffIcon className="icon" cursor="pointer"/>
            }
          </button>
        )}
      </div>
    </InputStyled>
  );
};

export default CustomInput;