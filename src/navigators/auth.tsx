import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigationParamList } from "../interfaces/navigation";
import { LoginScreen } from '../screens'
import { BackHandler } from "react-native";

const Stack = createNativeStackNavigator<AuthNavigationParamList>()

const AuthNavigator: React.FC<any> = ({ route, navigation }) => {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBack);
    return () => backHandler.remove();
  }, [navigation]);

  const onBack = () => {
    BackHandler.exitApp();
    return true
  }

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator