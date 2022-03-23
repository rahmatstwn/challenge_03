import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import MainScreen from './BottomTab';
// import DetailScreen from '../../screens/DetailScreen';
// import LoginScreen from '../../screens/auth/LoginScreen';
// import RegisterScreen from '../../screens/auth/RegisterScreen';
import Home from '../../screen/HalHome';
import Detail from '../../screen/HalDetail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
