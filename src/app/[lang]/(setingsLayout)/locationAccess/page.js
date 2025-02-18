"use client"
import {AccessLocationStyled} from '@/app/[lang]/(setingsLayout)/locationAccess/styled';
import ButtonUsage from "@/components/UI/Button";
import PlaceIcon from '@mui/icons-material/Place';
import {Typography} from '@mui/material';
import Link from 'next/link';
import {useCallback, useEffect, useState} from "react";
import SetManualLocation from "@/components/SetManualLocation";
import MapComponent from "@/components/UI/Map";

const AccessLocation = () => {
  // const dispatch = useDispatch();
  // const t = useTranslations("login");
  const [currentZoom, setCurrentZoom] = useState(2);
  const [center, setCenter] = useState({latitude: 0, longitude: 0});
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleGetAccess = () => {
    setButtonVisible(true)

    setCurrentZoom(16)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        })
    }
  }

  const handleDeniedAccess = () => {
    setButtonVisible(true)
  }

  return (
    <AccessLocationStyled>
      <MapComponent center={center} zoom={currentZoom} setZoom={setCurrentZoom}/>

      <div className='controlElements'>
        {buttonVisible ?
          <Link href={'/'}>
            <Typography
              variant='subtitle1'
              textDecoration='underline'
              color='companyAccentMain'
            >
              Go to home page
            </Typography>
          </Link>
          :
          <ButtonUsage
            variant="contained"
            type="submit"
            color="secondary"
            onClick={handleGetAccess}
          >
            Access LOCATION
            <PlaceIcon/>
          </ButtonUsage>
        }

        {!buttonVisible &&
          <ButtonUsage
            variant="outlined"
            type="submit"
            color="secondary"
            onClick={handleDeniedAccess}
          >
            Denied
          </ButtonUsage>
        }

        <Typography
          variant="subtitle2"
          textTransform="uppercase"
          color="main"
        >
          DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE app
        </Typography>

        <Typography
          variant="h3"
          textTransform="uppercase"
          color="companyAccentMain"
        >
          OR
        </Typography>

        <SetManualLocation/>
      </div>
    </AccessLocationStyled>
  );
};

export default AccessLocation;