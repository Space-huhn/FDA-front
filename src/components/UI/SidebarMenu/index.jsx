"use client"

import {Drawer} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Link from "next/link";
import {getDictionary} from "@/utils/dictionary";

const Index = ({open, setOpen}) => {

    const setVisibleSidebar = () => setOpen(false);

    return (
        // <SidebarMenuStyled>
            <Drawer
                open={open}
                // onClose={setOpen(false)}
                anchor="left"
                variant="temporary"
                PaperProps={{ style: { background: '#FF7622', color: '#fff', padding: 30}}}
            >
                <div className='wrapper'>

                    <button
                        onClick={setVisibleSidebar}
                    >
                        <KeyboardArrowDownIcon
                            onClick={setVisibleSidebar}

                            className="rotate-90 flexEnd"
                        />
                    </button>

                    {/*<Link href={`/${lang}`}>{dict.menu.home}</Link>*/}

                    <div>text 1</div>
                    <div>text 2</div>
                    <div>text 3</div>
                </div>

            </Drawer>
        // </SidebarMenuStyled>
    );
};

export default Index;