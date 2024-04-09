"use client"

import Header from "@/components/header";
// import {PageStyled} from "@/app/[lang]/styled";
import React, {useEffect, useState} from "react";
import SidebarMenu from "@/components/UI/SidebarMenu";

const NavigationElements = ({children, dict, lang}) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Header lang={lang} sideVisible={setVisible}/>
            <SidebarMenu  open={visible} setOpen={setVisible}/>
            {/*{children}*/}
        </>
    );
};

export default NavigationElements;




