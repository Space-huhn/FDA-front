import { getDictionary } from "@/utils/dictionary";
import { Typography } from "@mui/material";
import { PageStyled } from "@/app/[lang]/styled";

const Home = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <PageStyled>
      <Typography variant="h3" align="center">
        {dict.homepage.greeting}
      </Typography>
      <Typography variant="body1" align="center">
        {dict.homepage.subheading}
      </Typography>
    </PageStyled>
  );
};

export default Home;
