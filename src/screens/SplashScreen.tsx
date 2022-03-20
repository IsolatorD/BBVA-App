import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { COLORS, images } from "../constants";
import { SplashScreenProps } from "../interfaces/navigation";
import { perfectSize } from "../utils/pixelPerfect";

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("App");
    }, 3000);
  }, [])
  return (
    <View style={styles.container}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: perfectSize(167.21),
    height: perfectSize(50),
  }
})

export default SplashScreen;