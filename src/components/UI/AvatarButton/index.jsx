"use client"
import {logout} from "@/store/features/authSlice";
import {Avatar, Menu, MenuItem, Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import {deleteCookie, getCookie} from "cookies-next";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AvatarIcon} from "./styled";
import DropDownMenuItem from "@/components/DropDownMenuItem";
import stringAvatar from "@/themes/stringAvatar";
import CustomLink from "@/components/UI/CustomLink/v2";

const AvatarButton = ({setIsAuth}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const userProfile = useSelector(state => state.profile).profile;

  // console.log(JSON.parse(getCookie('user')))
  // const userProfile = useSelector(state => state.user);
  // const userProfileInfo = useSelector(state => JSON.parse(state.me.me).userInfo)
  // console.log(userProfileInfo);

  const hostUrl = process.env.NEXT_PUBLIC_DB_HOST;

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = async () => {
    try {
      dispatch(logout());
      setIsAuth(false);
      localStorage.removeItem('authToken');
      deleteCookie('user');
      handleClose();
      router.replace("/");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        {userProfile?.profile?.avatar ?
          <AvatarIcon
            alt={`${userProfile?.profile?.name}`}
            src={`${hostUrl}${userProfile?.profile?.avatar}`}
          />
          :
          <Avatar {...stringAvatar(userProfile?.profile?.name)} />
        }
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <div style={{padding: "6px 16px"}}>
          <Typography
            variant="h2"
            color="dark"
          >
            {userProfile.profile.name}
          </Typography>
        </div>

        {!userProfile?.profile?.isVerified &&
          <CustomLink href={`${getCookie('NEXT_LOCALE')}/send-confirm-email`}>
            Your mail is not verified, click on link to confirm your mail address.
          </CustomLink>
        }

        <MenuItem onClick={handleClose}>

        </MenuItem>
        <DropDownMenuItem handelAction={handleClose} url='/account'/>

        <MenuItem onClick={handleClose}>
          <Link href="/account">
            <Typography variant="subtitle2">
              My account
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={logOut}>Log out</MenuItem>
      </Menu>
    </>
  );
};

export default AvatarButton;