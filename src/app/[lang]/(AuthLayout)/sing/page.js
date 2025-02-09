"use client"
import BackButton from "@/components/UI/BackButton";
import ButtonUsage from "@/components/UI/Button";
import FormPageContainer from "@/components/UI/FormPageContainer";
import CustomInput from "@/components/UI/Input";
import api from "@/services/api";
import {Alert, FormControl} from "@mui/material";
import {deleteCookie, getCookie, setCookie} from "cookies-next";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from 'react';
import {useForm} from "react-hook-form";
import {jwtDecode} from "jwt-decode";
import {login} from "@/store/features/authSlice";
import {saveProfile} from "@/store/features/profileSlice";
import {useDispatch} from "react-redux";

const SingUp = () => {
  const [singData, setSingData] = useState({name: "", email: "", password: "", confirmPassword: ""});
  const [responseError, setResponseError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (value, key) => {
    setSingData({...singData, [key]: value})
  }

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setResponseError(true);
      }

      const user = await api.user().registration({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      setCookie('user', {"access_token": user.access_token, "profile": user.user});
      setResponseError(false);

      const decoded = jwtDecode(user.token);

      localStorage.removeItem('authToken');
      localStorage.setItem('authToken', user.token);

      const profile = await api.user().profile(decoded.id)
      const profileData = {access_token: user.token, profile: profile}

      dispatch(login());
      dispatch(saveProfile(profileData));

      deleteCookie("user");
      setCookie("user", profileData);

      setResponseError(false);
      router.replace(`/${getCookie('NEXT_LOCALE')}/onboarding`);
    } catch (error) {
      console.log(error);
      setResponseError(true);
    }
  }

  const t = useTranslations("sing");

  return (
    <>
      <Link href={'login'} className="backLink">
        <BackButton/>
      </Link>

      <FormPageContainer
        title={t("title")}
        subtitle={t("subtitle")}
      >
        <FormControl>
          <CustomInput
            label={t("nameLabel")}
            placeholder="John Doe"
            onChange={handleChange}
            type={"name"}
            name={"name"}
            register={register}
            required
            error={errors.name}
          />

          <CustomInput
            label={t("emailLabel")}
            placeholder="example@gmail.com"
            onChange={handleChange}
            type={"email"}
            name={"email"}
            register={register}
            required
            error={errors.email}
          />

          <CustomInput
            label={t("passwordLabel")}
            placeholder={"••••••••"}
            onChange={handleChange}
            type={"password"}
            name={"password"}
            register={register}
            required
            error={errors.password}
          />

          <CustomInput
            label={t("confirmPasswordLabel")}
            placeholder="••••••••"
            onChange={handleChange}
            type={"password"}
            name={"confirmPassword"}
            register={register}
            required
            error={errors.confirmPassword}
          />

          {(errors.email || errors.password || errors.name || errors.password) && (
            <Alert severity="error">{t("notCompleteForm")}</Alert>
          )}

          {responseError && (
            <Alert severity="error">{t("exception")}</Alert>
          )}

          <ButtonUsage
            variant="contained"
            type="submit"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
          >
            {t("singButton")}
          </ButtonUsage>
        </FormControl>
      </FormPageContainer>
    </>
  );
};

export default SingUp;