"use client"
import {Typography} from '@mui/material';
import {useTranslations} from "next-intl";
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import api from "@/services/api";
import CustomSelectFromObject from "@/components/UI/CustomSelectFromObject";

const SetManualLocation = () => {
  const dispatch = useDispatch()
  const t = useTranslations("login");
  const [position, setPosition] = useState({latitude: 0, longitude: 0});
  const [buttonVisible, setButtonVisible] = useState(false);
  const [countries, setCountries] = useState();
  const [countriesNames, setCountriesNames] = useState();
  const [location, setLocation] = useState({countries: "", states: "", cities: "", address: ""});

  const handleGetAccess = () => {
    setButtonVisible(true)

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            latitude: parseFloat(position?.coords.latitude),
            longitude: parseFloat(position?.coords.longitude),
          });
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);
  }

  const handleDeniedAccess = () => {
    setButtonVisible(true)
  }

  async function fetchCountriesList() {
    try {
      const res = await api.countries().getCountries();
      setCountries(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchStatesList() {
    try {
      const res = await api.states().getStateByID();
      setCountries(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCountriesList()
    fetchStatesList()
  }, [])

  return (
    <>
      {!location.countries ?
        (<CustomSelectFromObject
          selectValue={(value) => {
            setLocation({...location, countries: value.name})
          }}
          border
          object={countries}
          defaultOptions={"Select your countries"}
        />) :
        <Typography>
          {`Countries: ${location.countries}`}
        </Typography>
      }
    </>
  );
};

export default SetManualLocation;