import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const Root = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Root;

//ada props theme navigation
