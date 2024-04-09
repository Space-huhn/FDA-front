"use client"
import Link from "next/link";
import LocaleSwitcher from "../localeSwitcher";
import { Toolbar } from "@mui/material";
import { HeaderStyled } from "@/components/header/styled";
import MenuButton from "@/components/UI/MenuButton";
import Image from 'next/image';
import Logo from '../icons/LogoWhite.svg';
import SearchInput from "@/components/UI/ShearchInput";
import {useState} from "react";

const Index = ({ lang, sideVisible }) => {
    const [searchValue, setSearchValue] = useState("");

    const setVisibleSidebar = () => sideVisible(true);

  return (
    <HeaderStyled>
      <Toolbar color="primary" className="toolbar">
          <MenuButton clickAction={setVisibleSidebar} />
        <Link href={`/${lang}`}>
            <Image src={Logo} alt="Logo" width={75}/>
        </Link>

        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>

        <LocaleSwitcher currentLang={lang}/>
      </Toolbar>
    </HeaderStyled>
  );
};

export default Index;