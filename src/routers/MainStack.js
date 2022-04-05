import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
// import {Home, Login, Register, DetailBooks} from '../screens';

//screens
import Home from '../screens/Home';
import Login from '../screens/Login';
import Success from '../screens/Success';
import Register from '../screens/Register';
import DetailBooks from '../screens/DetailBooks';

// import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const mainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Success">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailBooks"
        component={DetailBooks}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default mainStack;
