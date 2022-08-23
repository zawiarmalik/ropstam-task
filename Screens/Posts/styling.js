import {StyleSheet} from 'react-native';
import {fontColors, fontFamilies} from '../../Components/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: fontColors.background,
    // justifyContent: 'center',
  },

  upperText: {
    fontSize: 18,
    color: fontColors.background,
    alignSelf: 'center',

    marginVertical: 20,
    fontFamily: fontFamilies.bold,
  },
  textContainer: {
    width: '100%',
    backgroundColor: fontColors.theme,
  },
});
export {styles};
