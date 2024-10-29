import {StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
const {verticalScale} = dimension();

export default StyleSheet.create({
  listEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(120),
  },

  titleError: {
    color: colors.black,
    fontSize: fontSize.xlarge,
  },
});
