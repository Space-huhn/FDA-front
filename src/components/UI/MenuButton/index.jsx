"use client"
import MenuIcon from "@/components/UI/IconsComponents/MenuIcon";

const Index = ({ clickAction }) => {
    return (
        <div
            onClick={clickAction}
            className="menu rounded-ee h-6 w-6 flex m-3 cursor-pointer">
            <MenuIcon />
        </div>
    );
};

export default Index;