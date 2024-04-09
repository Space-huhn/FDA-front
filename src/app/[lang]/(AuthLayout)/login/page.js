"use client"
import React, {useState} from 'react';
import CustomInput from "@/components/UI/Input";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";
import Link from "next/link";
import ButtonUsage from "@/components/UI/Button";
import {useTranslations} from "next-intl";
import FormContainer from "@/components/UI/FormContainer";

const Login = ({lang}) => {
    const [rememberPass, setRememberPass] = useState(false);

    const [loginData, setLoginData] = useState({email: "", password: ""})

    const handleClick = () => {
        console.log(loginData)
    }

    const handleRememberMe = () => {
        setRememberPass(!rememberPass)
    }

    const handleChange = (value, key) => {
        setLoginData({...loginData, [key]: value })
    }

    const toggleRememberPassword = () => {
        setRememberPass(!rememberPass)
    }

    const t = useTranslations('login');

    return (
        <FormContainer title={t('title')} subtitle={t('subtitle')}>

            <FormControl className='gap-6' error>

                <CustomInput label={t('emailLabel')}
                             placeholder={"example@gmail.com"}
                             type={"email"}
                             onChange={handleChange}
                             value={loginData.email}/>

                <CustomInput label={t('passwordLabel')}
                             placeholder={"••••••••"}
                             type={"password"}
                             onChange={handleChange}
                             value={loginData.password}/>

                <div className="flex justify-between items-center">
                    <FormControlLabel
                            className="text-[#7E8A97]"

                            control={<Checkbox checked={rememberPass}
                                             className="text-[#E3EBF2]"
                                             onChange={handleRememberMe}/>}

                            label={t('remember')}/>
                    <Link href={'login/recovery'}
                          className="text-[#FF7622] text-sm">
                          {t('forgotPassword')}
                    </Link>
                </div>

                <ButtonUsage type="contained"
                             color="secondary"
                             onClick={handleClick}>
                            {t('logButton')}
                </ButtonUsage>
            </FormControl>

            <div className="flex justify-center gap-2 items-center mt-8">
                    <Typography variant="span" className="text-[#646982]">
                        {t('question')}
                    </Typography>
                <Link href={'login/sing'} color="secondary" className="text-[#FF7622] uppercase text-sm">
                    {t('singFormLink')}
                </Link>
            </div>
        </FormContainer>
    );
};

export default Login;


