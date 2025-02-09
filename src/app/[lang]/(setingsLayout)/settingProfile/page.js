import React from 'react';
import Loader from "@/components/UI/Loader";
import api from "@/services/api";
import {getCookie} from "cookies-next";

//
// async function getData() {
//   const res = await api.user().me()
//   return res.json()
// }

const SettingProfile = async () => {
  // const data = await getData();
  //
  // console.log(data)


  return (<div>
    Settings
    <Loader/>





  </div>);
};

export default SettingProfile;