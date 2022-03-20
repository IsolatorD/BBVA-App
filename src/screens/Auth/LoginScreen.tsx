import { Formik } from "formik";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
// @ts-ignore
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scrollview/src/KeyboardAwareScrollView';
import Input from "../../components/Input";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { perfectSize } from "../../utils/pixelPerfect";

const LoginScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="interactive"
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View style={styles.content}>
          <View
            style={styles.header}
          >
            <View
              style={styles.menuContainer}
            >
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={styles.menu}
              />
            </View>
            <View
              style={styles.logoContainer}
            >
              <Image
                source={images.logo}
                resizeMode="contain"
                style={styles.logo}
              />
            </View>
          </View>
          <View
            style={styles.avatarContainer}
          >
            <Image
              source={images.user2}
              resizeMode="contain"
              style={styles.avatar}
            />
            <TouchableOpacity
              style={styles.exchangeButton}
            >
              <Image
                source={icons.exchange}
                resizeMode="contain"
                style={styles.exchangeIcon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={styles.titleContainer}
          >
            <Text
              style={styles.title}
            >
              Hola, Mauricio
            </Text>
            <Text
              style={styles.subtitle}
            >
              ¿Qué tal tu día hoy?
            </Text>
          </View>
          <View
            style={styles.inputContainer}
          >
            <Formik
              initialValues={{
                password: ''
              }}
              onSubmit={values => {}}
            >
              {({values, handleChange, handleSubmit}) => (
                <View>
                  <Input
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    icon={showPassword ? icons.hidden : icons.eye}
                    secureTextEntry={!showPassword}
                    onPressIcon={toggleShowPassword}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onSubmitEditing={handleSubmit}
                  />

                  <TouchableOpacity
                    style={styles.forgotPasswordButton}
                  >
                    <Text
                      style={styles.forgotPasswordText}
                    >
                      Olvidé mi contraseña
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
          <View
            style={styles.optionsContainer}
          >
            <TouchableOpacity
              style={styles.option}
            >
              <Image
                source={icons.shield}
                resizeMode="contain"
                style={styles.optionIconShield}
              />
              <Text
                style={styles.optionText}
              >
                Token móvil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
            >
              <Image
                source={icons.qrcode}
                resizeMode="contain"
                style={styles.optionIconQR}
              />
              <Text
                style={styles.optionText}
              >
                Operación QR + CoDi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
            >
              <Image
                source={icons.phoneCall}
                resizeMode="contain"
                style={styles.optionIconCall}
              />
              <Text
                style={styles.optionText}
              >
                Línea BBVA
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: perfectSize(35),
    borderBottomWidth: perfectSize(8),
    borderBottomColor: COLORS.primary,
  },
  content: {
    flex: 1,
  },
  header: {
    width: SIZES.width,
    height: perfectSize(137),
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuContainer: {
    width: '35%',
  },
  menu: {
    width: perfectSize(27.3),
    height: perfectSize(23.79),
  },
  logoContainer: {
    width: '65%',
  },
  logo: {
    width: perfectSize(104.43),
    height: perfectSize(31.23),
    tintColor: COLORS.primary,
  },
  avatarContainer: {
    height: perfectSize(116),
    flexDirection: 'row',
  },
  avatar: {
    width: perfectSize(88),
    height: perfectSize(88),
  },
  exchangeButton: {
    width: perfectSize(33),
    height: perfectSize(33),
    borderRadius: perfectSize(33 / 2),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: perfectSize(27.5),
    marginLeft: perfectSize(19),
  },
  exchangeIcon: {
    width: perfectSize(13.32),
    height: perfectSize(13.32),
    tintColor: COLORS.white,
  },
  titleContainer: {
    height: perfectSize(124)
  },
  title: {
    ...FONTS.bold,
    fontSize: perfectSize(30),
    color: COLORS.primary
  },
  subtitle: {
    ...FONTS.regular,
    fontSize: perfectSize(15),
    color: COLORS.blueGray2
  },
  inputContainer: {
    height: perfectSize(194),
  },
  forgotPasswordButton: {
    marginTop: perfectSize(29.6),
    alignItems: 'center',
  },
  forgotPasswordText: {
    ...FONTS.regular,
    fontSize: perfectSize(15),
    color: COLORS.primary
  },
  optionsContainer: {},
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: perfectSize(46),
  },
  optionIconShield: {
    width: perfectSize(27.39),
    height: perfectSize(32.16),
    tintColor: COLORS.primary
  },
  optionIconQR: {
    width: perfectSize(27.39),
    height: perfectSize(27.39),
    tintColor: COLORS.primary
  },
  optionIconCall: {
    width: perfectSize(27),
    height: perfectSize(27.04),
    tintColor: COLORS.primary
  },
  optionText: {
    ...FONTS.regular,
    fontSize: perfectSize(15),
    color: COLORS.primary,
    marginLeft: perfectSize(21.6),
  },
})

export default LoginScreen;