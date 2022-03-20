import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInputProps,
  TextInput
} from "react-native";
import { COLORS, FONTS } from "../constants";
import { perfectSize } from "../utils/pixelPerfect";

interface InputProps extends TextInputProps {
  label: string;
  icon?: any;
  onPressIcon?: () => void;
}

const Input: React.FC<InputProps> = ({ label, icon, onPressIcon, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={COLORS.primary}
        {...props}
      />
      { icon && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onPressIcon}
          >
            <Image
              source={icon}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    ...FONTS.regular,
    fontSize: perfectSize(12),
    color: COLORS.primary
  },
  input: {
    ...FONTS.regular,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    paddingRight: perfectSize(17),
    height: perfectSize(37.5),
    color: COLORS.primary,
    fontSize: perfectSize(12)
  },
  iconContainer: {
    position: "absolute",
    right: perfectSize(17),
    top: perfectSize(22),
  },
  icon: {
    width: perfectSize(16.5),
    height: perfectSize(16.5),
    tintColor: COLORS.primary
  }
});

export default Input;