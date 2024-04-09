"use client"

import {FormLabel} from "@mui/material";
import {InputStyled} from "@/components/UI/Input/styled";
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const CodeInput = ({ label }) => {
    // const getCodeInputs = () => {
    //     let content = [];
    //
    //     for (let i = 0; i < codeLength; i++) {
    //
    //         content.push(
    //             <input type="number" maxLength="1"
    //                    className="bg-gray-200 text-stile-900 p-3 max-w-12 rounded-lg text-base
    //                    placeholder-gray-400 text-blue-950 outline-1 focus:outline-gray-400 text-center"/>
    //         );
    //     }
    //     return content;
    // };

    //https://www.npmjs.com/package/react-otp-input


    const [otp, setOtp] = useState('');

    return (
         <InputStyled>
             <FormLabel className="label" >{label}</FormLabel>

             <OtpInput
                 value={otp}
                 onChange={setOtp}
                 numInputs={4}
                 inputType={"number"}
                 renderSeparator={<span style={{width: "26px"}}></span>}
                 inputStyle={"bg-gray-200 text-stile-900 mt-3 p-3 min-w-12 rounded-lg text-base placeholder-gray-400 text-blue-950 outline-1 focus:outline-gray-400"}
                 renderInput={(props) => <input {...props} />}
             />

            {/*<div className="flex gap-5">*/}
            {/*    {getCodeInputs()}*/}
         </InputStyled>
    );
};

export default CodeInput;