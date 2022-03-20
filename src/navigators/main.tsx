import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigationParamList } from "../interfaces/navigation";

import { SplashScreen } from "../screens";
import AuthNavigator from "./auth";
import AppNavigator from "./app";


import AuthService from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import { authSlice } from "../store/reducers/auth";
import { useDispatch } from "react-redux";

const Auth = new AuthService()
const Stack = createNativeStackNavigator<MainNavigationParamList>()

const MainNavigator: React.FC = () => {
  const { token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token
      try {
        token = await Auth.getToken()
      }
      catch (e) {
        console.log(e)
      }
      if (token) {
        dispatch(authSlice.actions.setToken(token))
      }
      // Auth.logout()
    }
    bootstrapAsync()
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false
        }} 
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        {
          token ?
            (
              <Stack.Screen name="App" component={AppNavigator} />
            )
            :
            (
              <Stack.Screen name="App" component={AuthNavigator} />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;