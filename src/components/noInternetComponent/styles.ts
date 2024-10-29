import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';

export default StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  modalComponent: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.65,
  },
  textCrypto: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  textButtonOffline: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    padding: 20,
  },
  buttonOffline: {
    borderRadius: 10,
    backgroundColor: colors.black,
  },
});
