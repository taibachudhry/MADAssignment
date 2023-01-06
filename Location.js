import React, { useState, useEffect } from 'react';
import {  StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import Home from './Home';

export default function Locators() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let longitude;
  let Latitude;

  if (errorMsg) {
    longitude = errorMsg;
  } else if (location) {
    longitude = JSON.parse(location.longitude);
    Latitude = JSON.parse(location.latitude);
  }


  return (
    <Home Latitude={Latitude} Longitude={longitude}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});