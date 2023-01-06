import React from 'react';
import { View } from 'react-native';
import PrayerTimes from './components/PrayerTimes';
import Location from './components/LanLon';
const App = () => {
  return (
    <View>
      <PrayerTimes />
      <Location/>
    </View>
  );
};

export default App;


