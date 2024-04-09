'use client'

import React from 'react';
import MenuIcon from "../../icons/MenuWhite.svg";
import Image from 'next/image';

const Index = ({clickAction}) => {
    return (
        <div
            onClick={clickAction}
            className="menu rounded-ee h-6 w-6 flex m-3 cursor-pointer">
            <Image src={MenuIcon} alt="MenuIcon" className="hover:color:#fff"/>
        </div>
    );
};

export default Index;