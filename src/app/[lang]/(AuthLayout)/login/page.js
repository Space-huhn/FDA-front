"use client"
import ButtonUsage from "@/components/UI/Button";
import CustomCheckbox from "@/components/UI/Checkbox";
import FormPageContainer from "@/components/UI/FormPageContainer";
import CustomInput from "@/components/UI/Input";
import api from "@/services/api";
import {login} from "@/store/features/authSlice";
import {Alert, FormControl, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Link from "next/link";
import {jwtDecode} from "jwt-decode";
import {deleteCookie, setCookie} from "cookies-next";
import {saveProfile} from "@/store/features/profileSlice";

const Login = () => {
  const [rememberPass, setRememberPass] = useState(false);
  const [responseError, setResponseError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const t = useTranslations("login");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const onSubmit = async (data) => {
    try {
      const user = await api.user().login({"email": data.username, "password": data.password});
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
      router.replace("/");
    } catch (error) {
      console.log(error);
      setResponseError(true);
    }
  }

  const onError = (data) => console.log(data)

  const toggleHandleRememberMe = () => {
    setRememberPass(!rememberPass)
  }

  return (
    <>
      <FormPageContainer title={t("title")} subtitle={t("subtitle")}>
        <FormControl>
          <CustomInput
            label={t("emailLabel")}
            placeholder="example@gmail.com"
            type={"email"}
            name={"username"}
            register={register}
            required
            error={errors.username}
          />

          <CustomInput
            label={t("passwordLabel")}
            placeholder="••••••••"
            type={"password"}
            name={"password"}
            register={register}
            required
            error={errors.password}
          />

          {(errors.email || errors.password) && (
            <Alert severity="error">{t("notCompleteForm")}</Alert>
          )}

          {responseError && (
            <Alert severity="error">{t("exception")}</Alert>
          )}

          <div className="bottomFormNavigation">
            <div className="rememberMe">
              <CustomCheckbox
                checked={rememberPass}
                onChange={toggleHandleRememberMe}
                label={t("remember")}
              />

              <Link href={"reset-password-form"}>
                <Typography
                  variant="subtitle2"
                  color="companyAccentMain"
                >
                  {t("forgotPassword")}
                </Typography>
              </Link>
            </div>

            <ButtonUsage
              variant="contained"
              type="submit"
              color="secondary"
              onClick={handleSubmit(onSubmit)}
            >
              {t("logButton")}
            </ButtonUsage>

            <div className="singIn">
              <Typography
                variant="subtitle2"
                color="dark"
              >
                {t("question")}
              </Typography>

              <Link href={"sing"}>
                <Typography
                  variant="h4"
                  color="companyAccentMain"
                  textTransform="uppercase"
                >
                  {t("singFormLink")}
                </Typography>
              </Link>
            </div>
          </div>
        </FormControl>
      </FormPageContainer>
    </>
  );
};

export default Login;