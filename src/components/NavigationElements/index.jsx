"use client"
import SidebarMenu from "@/components/UI/SidebarMenu";
import { useState } from "react";
import Header from "@/components/Header";

const NavigationElements = ({children, dict, lang}) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Header lang={lang} sideVisible={setVisible}/>
      <SidebarMenu open={visible} setOpen={setVisible}/>
    </>
  );
};

export default NavigationElements;




