import React from "react";
import {
  View,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";
import { AppNavigationParamList } from "../interfaces/navigation";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator<AppNavigationParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === "Home") {
            icon = icons.home;
          }

          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color
                }}
              />
              {
                focused && (
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 5,
                      backgroundColor: COLORS.primary,
                      marginVertical: 5,
                    }}
                  />
                )
              }
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator;