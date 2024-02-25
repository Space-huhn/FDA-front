import { getDictionary } from "@/utils/dictionary";
import { Typography } from "@mui/material";

const Home = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" align="center">
        {dict.welcome.message1}
      </Typography>
      <Typography variant="body1" align="center">
        {dict.welcome.message2}
      </Typography>
    </div>
  );
};

export default Home;
