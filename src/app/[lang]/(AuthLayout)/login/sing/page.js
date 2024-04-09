"use client"
import React, {useState} from 'react';
import {Checkbox, FormControl, FormControlLabel} from "@mui/material";
import CustomInput from "@/components/UI/Input";
import Link from "next/link";
import ButtonUsage from "@/components/UI/Button";
import FormContainer from "@/components/UI/FormContainer";
import {useTranslations} from "next-intl";

const SingUp = () => {
    const [singData, setSingData] = useState({name: "", email: "", password: "", confirmPassword: ""})

    const handleChange = (value, key) => {
        setSingData({...singData, [key]: value })
    }

    const showLogs = () => {
        console.log(singData)
    }

    const t = useTranslations('sing');

    return (
        <FormContainer title={t('title')} subtitle={t('subtitle')}>
            <FormControl className='gap-6 w-full' error>

                <CustomInput label={t('nameLabel')} placeholder={"John Doe"} value={singData.name}
                             onChange={handleChange} type={"name"} name={"name"}/>

                <CustomInput label={t('emailLabel')} placeholder={"example@gmail.com"} value={singData.email}
                             onChange={handleChange} type={"email"} name={"email"}/>

                <CustomInput label={t('passwordLabel')} placeholder={"••••••••"} value={singData.password}
                             onChange={handleChange} type={"password"} name={"password"}/>

                <CustomInput label={('confirmPasswordLabel')} placeholder={"••••••••"} value={singData.confirmPassword}
                             onChange={handleChange} type={"password"} name={"confirmPassword"}/>

                <ButtonUsage type="contained" color="secondary" onClick={showLogs}>{t('singButton')}</ButtonUsage>
            </FormControl>
        </FormContainer>
    );
};

export default SingUp;