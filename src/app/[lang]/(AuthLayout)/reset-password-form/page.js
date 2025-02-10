"use client"
import BackButton from "@/components/UI/BackButton";
import ButtonUsage from "@/components/UI/Button";
import FormPageContainer from "@/components/UI/FormPageContainer";
import CustomInput from "@/components/UI/Input";
import {Alert, FormControl, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import api from "@/services/api";

const ResetPasswordForm = () => {
  const [rememberPass, setRememberPass] = useState("");
  const [responseError, setResponseError] = useState(false);
  const router = useRouter();
  const t = useTranslations("resetPassword");
  const [check, isCheck] = useState(false)

  const changeHandle = (value) => {
    setRememberPass(value)
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data) => {
    try {

      console.log(data.email)

      const check = await api.user().check({email: data.email});
      isCheck(check)

      setResponseError(false);
      // router.replace("/");
    } catch (error) {
      setResponseError(true);
    }
  }

  const onError = (data) => console.log(data)

  return (
    <>
      <Link href={'login'} className="backLink">
        <BackButton/>
      </Link>

      {check ?
        <Typography
          variant="h1"
          color="light"
        >
          Check your Email
        </Typography>
        :
        <FormPageContainer
          title={t("title")}
          subtitle={t("subtitle")}
        >
          <FormControl className="formControl">
            <CustomInput
              label={t("emailLabel")}
              placeholder="example@gmail.com"
              name="email"
              type="email"
              register={register}
              error={errors.email}
              required
            />

            {errors.email && (
              <Alert severity="error" className="error">{t("notCompleteForm")}</Alert>
            )}

            <ButtonUsage
              onClick={handleSubmit(onSubmit, onError)}
              type="submit"
              variant="contained"
              color="secondary"
            >
              {t("sendButton")}
            </ButtonUsage>
          </FormControl>
        </FormPageContainer>
      }
    </>
  );
};

export default ResetPasswordForm;