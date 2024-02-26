import Link from "next/link";
import { getDictionary } from "@/utils/dictionary";
import LocaleSwitcher from "../localeSwitcher";
import { Toolbar } from "@mui/material";
import { HeaderStyled } from "@/components/header/styled";

const Index = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <HeaderStyled>
      <Toolbar className="toolbar">
        <Link href={`/${lang}`}>Home</Link>
        <LocaleSwitcher />
      </Toolbar>
    </HeaderStyled>
  );
};

export default Index;
