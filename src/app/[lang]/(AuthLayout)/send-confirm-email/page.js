"use client"
import {Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import ButtonUsage from "@/components/UI/Button";
import api from "@/services/api";
import {getCookie} from "cookies-next";

const ConfirmEmail = () => {
  const [rememberPass, setRememberPass] = useState("");
  const [responseError, setResponseError] = useState(false);
  const [isSandMail, setIsSandMail] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.profile);
  const t = useTranslations("confirmEmail");

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
      await api.user().sendConfirmEmail({
        "lang": `${getCookie("NEXT_LOCALE")}`,
        "token": localStorage.getItem("authToken")
      });

      setResponseError(false);
      setIsSandMail(true);
    } catch (error) {
      console.log(error);
      setResponseError(true);
    }
  }

  const onError = (data) => console.log(data)

  return (
    <>
      {isSandMail ?
        <div>
          <Typography variant="h1" color="light">Check your email!!!</Typography>
        </div>
        :
        <div style={{display: 'flex', flexDirection: "column", gap: '30px', alignItems: 'center'}}>
          <Typography variant="h1" color="light">{t("title")}</Typography>

          <Typography variant="subtitle2" color="light">{t("subtitle")}</Typography>

          <Typography variant="h2" color="light" textDecoration="underline">{user?.profile?.email}</Typography>

          <ButtonUsage
            onClick={handleSubmit(onSubmit)}
            type="submit"
            variant="contained"
            color="secondary"
          >
            {t("confirmButton")}
          </ButtonUsage>
        </div>
      }
    </>
  );
};

export default ConfirmEmail;