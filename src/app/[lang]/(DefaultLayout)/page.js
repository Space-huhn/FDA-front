// "use client"
// import SearchInput from '@/components/UI/SearchInput';
// import {useTranslations} from "next-intl";
// import React, {useState} from 'react';
import {Typography} from "@mui/material";
import {PageStyled} from "@/app/[lang]/(DefaultLayout)/styled";
import ListBand from "@/components/ListBand";
import api from "@/services/api";
// import FoodPreview from "@/components/FoodPreview";
// import {DefaultLoadingElement} from "@react-google-maps/api/src/LoadScript";
// import Loader from "@/components/UI/Loader";

const Home = ({params: {lang}}) => {
  // const t = useTranslations("homepage");
  // const info = useSelector(state => state.me);
  // console.log(getCookie('user'));

  // const [searchValue, setSearchValue] = useState('');

  const test = async () => {
    try {
      const res = await api.products().getProducts();
      console.log(res)
      return res.data;
    } catch (error) {

      console.log(error)
    }
  }

  test()

  // const item = await getItem(id)


  return (

    <PageStyled>

      <div className="top">
        <div className="hiUser">
          <Typography variant="subtitle2" color="dark">Hey Halal,</Typography>
          <Typography variant="h3" color="dark">Good Afternoon!</Typography>
          {/*//     </div>*/}
          {/*//     /!*<SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>*!/*/}
        </div>
        {/*//*/}
        {/*//   <FoodPreview food="Burger Bistro " restaurant="Rose garden " price="$40"/>*/}
        {/*//*/}
        {/*//   <div className='categories'>*/}
        <ListBand/>
      </div>


      {/*  //<PageStyled>*/}
      {/*    //<Onboarding />*/}
      {/*    // <Onboarding />*/}
      {/*    //</PageStyled>*/}

    </PageStyled>
  );
};

export default Home;