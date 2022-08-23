import {StyleSheet} from 'react-native';
import {fontColors, fontFamilies} from '../../Components/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: fontColors.background,
    justifyContent: 'center',
  },
  button: {
    width: '70%',
    height: 35,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
    borderColor: fontColors.theme,
    backgroundColor: fontColors.theme,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: fontColors.background,
    fontFamily: fontFamilies.bold,
    alignSelf: 'center',
  },
  upperText: {
    fontSize: 18,
    color: fontColors.black,
    alignSelf: 'center',
    marginBottom: 30,
    fontFamily: fontFamilies.bold,
  },
  input: {
    backgroundColor: fontColors.dullWhite,
    fontFamily: fontFamilies.regular,
    color: fontColors.black,
    height: 40,
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: fontColors.dullWhite,
    fontSize: 15,
    alignItems: 'center',
    paddingLeft: 30,
  },
});
export {styles};
