import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type MainNavigationParamList = {
  SplashScreen: undefined;
  App: undefined;
}

export type SplashScreenProps = NativeStackScreenProps<MainNavigationParamList, "SplashScreen">;
export type AppProps = NativeStackScreenProps<MainNavigationParamList, "App">;

export type AppNavigationParamList = {
  Home: undefined;
}
export type HomeProps = BottomTabScreenProps<AppNavigationParamList, "Home">;

export type AuthNavigationParamList = {
  Login: undefined;
}
export type LoginProps = NativeStackScreenProps<AuthNavigationParamList, "Login">;