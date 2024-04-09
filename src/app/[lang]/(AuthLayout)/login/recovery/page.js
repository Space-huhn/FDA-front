"use client"
import React, {useState} from 'react';
import CustomInput from "@/components/UI/Input";
import {FormControl} from "@mui/material";
import Link from "next/link";
import ButtonUsage from "@/components/UI/Button";
import {useTranslations} from "next-intl";
import FormContainer from "@/components/UI/FormContainer";

const Recovery = () => {
    const [rememberPass, setRememberPass] = useState("")

    const changeHandle = (value) => {
        setRememberPass(value)
    }

    const t = useTranslations('recovery');


    return (
        <FormContainer title={t('title')} subtitle={t('subtitle')}>
            <FormControl className='gap-6 w-full mb-8'>
                <CustomInput label={t("emailLabel")}
                             placeholder={"example@gmail.com"}
                             type={"email"}
                             value={rememberPass}
                             onChange={changeHandle}
                />

                <ButtonUsage type="contained" color="secondary" >{t("sendButton")}</ButtonUsage>
            </FormControl>
        </FormContainer>
    );
};

export default Recovery;