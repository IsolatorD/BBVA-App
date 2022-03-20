import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: '#004481',
  primaryDark: '#092D5D',
  secondary: '#E5F0F6',
  success: '#5FBE83',
  error: '#E06273',
  white: '#FFFFFF',
  black: '#4B637A',
  gray: '#ACB4C9',
  grayDark: '#707B9B',
  blueLight: '#4CABCE',
  purpleBlue: '#3767F0',
  blueGray: '#C0D4DF',
  blueGray2: '#889FB4',
  purple: '#735FDA',
  orange: '#F7893A'
}

export const SIZES = {
  // App Dimensions
  width,
  height,
}

export const FONTS = {
  regular: { fontFamily: 'Euclid Circular A Regular' },
  bold: { fontFamily: 'Euclid Circular A Bold' },
  medium: { fontFamily: 'Euclid Circular A Medium' },
  semiBold: { fontFamily: 'Euclid Circular A SemiBold' },
}

export default { COLORS, SIZES, FONTS };