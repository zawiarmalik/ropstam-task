import {Appearance} from 'react-native';
const isDarkMode = Appearance.getColorScheme();
const backgroundC = isDarkMode === 'dark' ? '#000' : '#FFFFFF';
const blackC = isDarkMode === 'dark' ? '#FFFFFF' : '#000';

let fontFamilies = {bold: 'Raleway-Bold', regular: 'Raleway-Regular'};

let fontColors = {
  white: '#FFFFFF',
  background: backgroundC,
  dullWhite: '#e0e0e0',
  black: blackC,
  theme: '#7B7B7B',
  silver: '#A9A9A9',
  grey: '#7B7B7B',
};
export {fontColors, fontFamilies};
