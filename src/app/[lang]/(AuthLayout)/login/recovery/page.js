"use client"
import React, {useState} from 'react';
import CustomInput from "@/components/UI/Input";
import {FormControl} from "@mui/material";
import Link from "next/link";
import ButtonUsage from "@/components/UI/Button";

const Recovery = () => {
    const [rememberPass, setRememberPass] = useState("")

    const changeHandle = (value) => {
        setRememberPass(value)
    }

    return (
        <div className="flex py-6 min-h-full flex-col justify-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">Forgot Password</h2>
                <p className="text-white mb-2 text-center">Please sign in to your existing account</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-3xl">

                <FormControl className='gap-6 w-full'>
                    <CustomInput label={"email"}
                                 placeholder={"example@gmail.com"}
                                 type={"email"}
                                 value={rememberPass}
                                 onChange={changeHandle}
                    />

                    <ButtonUsage type="contained" color="secondary" >Send Link</ButtonUsage>
                </FormControl>

                <div className="flex justify-center gap-2 items-center mt-8">
                    <span className="text-[#646982]">Don’t have an account?</span>
                    <Link href={'/'} className="text-[#FF7622] uppercase">Sign Up</Link>
                </div>

            </div>
        </div>
    );
};

export default Recovery;