"use client"
import Logo from "@/components/UI/IconsComponents/Logo";
import {HeaderStyled} from "@/components/Header/styled";
import LoginIcon from '@mui/icons-material/Login';
import {FormControl, Toolbar, Typography} from "@mui/material";
import {getCookie} from "cookies-next";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState,} from "react";
import {useDispatch, useSelector} from 'react-redux';
import pathsConfig from "@/utils/pathsConfig";
import AvatarButton from "@/components/UI/AvatarButton";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import themeClassic from "@/themes/classic";

const Header = ({lang, sideVisible}) => {
  const dispatch = useDispatch();
  const [auth, setIsAuth] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const setVisibleSidebar = () => sideVisible(true);
  const router = useRouter();
  const cartItemsLength = useSelector(state => state.cart.cartItems)

  useEffect(() => {
    setIsAuth(Boolean(getCookie("user")));
  }, [])


  const handleChange = (event) => {
    setIsActive(true);
    setSelectedItem(event.target.value);
  };

  return (
    <HeaderStyled>
      <Toolbar className="toolbar">
        <Link style={{marginLeft: '5px'}} href={`/${lang}`}>
          <Logo/>
        </Link>

        <div className="headerRight">
          {/*<LocaleSwitcher currentLang={lang}/>*/}

          {auth ?
            <>
              <AvatarButton setIsAuth={setIsAuth}/>
              <Badge
                // color={palette?.colorCanvas?.dark}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: themeClassic.palette.colorCanvas.dark,
                    color: themeClassic.palette.colorAccent.companyAccentMain,
                  }
                }}
                badgeContent={cartItemsLength?.length ? cartItemsLength?.length : '0'}>
                <ShoppingCartIcon fontSize="large"
                                  color="primary"
                />
              </Badge>
              <div className="deliveryPlace">
                <Typography
                  variant="titleAccent"
                >
                  Deliver to
                </Typography>
                <FormControl>
                </FormControl>
              </div>
              {/*<MenuButton clickAction={setVisibleSidebar}/>*/}
            </>
            :
            <Link href={pathsConfig.paths.login} replace prefetch>
              <LoginIcon className='loginButton'/>
            </Link>
          }

        </div>
      </Toolbar>
    </HeaderStyled>
  );
};

export default Header;