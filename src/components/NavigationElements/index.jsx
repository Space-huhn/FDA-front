"use client"

import Header from "@/components/header";
import React, {useEffect, useState} from "react";
import SidebarMenu from "@/components/UI/SidebarMenu";

const NavigationElements = ({children, dict, lang}) => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Header lang={lang} sideVisible={setVisible}/>
            <SidebarMenu  open={visible} setOpen={setVisible}/>
        </>
    );
};

export default NavigationElements;




