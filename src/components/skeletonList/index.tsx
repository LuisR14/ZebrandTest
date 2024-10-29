import React from 'react';
import {View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const ListSkeleton = () => {
  const {theme, styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <ContentLoader
        speed={2}
        width="100%"
        height={700}
        backgroundColor={theme.colors.disabled}
        foregroundColor={'#999'}>
        <Rect x="0" y="116" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="186" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="256" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="326" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="396" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="466" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="536" rx="4" ry="4" width="100%" height="60" />
        <Rect x="0" y="606" rx="4" ry="4" width="100%" height="60" />
      </ContentLoader>
    </View>
  );
};

const stylesheet = createStyleSheet({
  container: {
    padding: 15,
    marginTop: -100,
  },
});
export default ListSkeleton;
