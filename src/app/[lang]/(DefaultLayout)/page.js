import {Typography} from "@mui/material";
import ButtonUsage from "@/components/UI/Button";
import CustomInput from "@/components/UI/Input";
import CodeInput from "@/components/UI/CodeInput";
import SearchInput from "@/components/UI/ShearchInput";
import {PageStyled} from "@/app/[lang]/(DefaultLayout)/styled";
import {useTranslations} from "next-intl";

const Home = ({ params: { lang } }) => {
  // const dict = await getDictionary(lang);
    // const test = async () => {
    //     const response = await fetch("http://api.loc:8085/api/health")
    //     const movies = await response.json();
    //     console.log(movies.health);
    // }
    // await test()

    const t = useTranslations('homepage');

  return (
    <PageStyled>
      <Typography variant="h3" align="center">
          {t('subheading')}
          {/*{dict.homepage.greeting}*/}
      </Typography>
      <Typography variant="body1" align="center">
          {/*{dict.homepage.subheading}*/}
      </Typography>

        <ButtonUsage color={"containedType"} type={"contained"}>Get Started</ButtonUsage>
        <ButtonUsage color={"textType"} type={"text"}>Skip</ButtonUsage>
        <ButtonUsage color={"outlinedType"} type={"outlined"}>Skip</ButtonUsage>
        <CustomInput label={"email"} placeholder={"example@gmail.com"}
                     type={"email"}/>
        <CustomInput label={"name"} placeholder={"John doe"}
                     type={"text"}/>
        <CustomInput label={"Password"} placeholder={"••••••••"}
                     type={"password"}/>
        <CodeInput label={"code"}/>
    </PageStyled>
  );
};

export default Home;