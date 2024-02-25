import Link from "next/link";
import { getDictionary } from "@/utils/dictionary";
import LocaleSwitcher from "./localeSwitcher";
import { AppBar, Toolbar } from "@mui/material";

const Header = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={`/${lang}`}>Home</Link>
        <LocaleSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
