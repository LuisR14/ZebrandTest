import {UserItems} from '@app/types/response';
import React, {memo, useCallback} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListCard = ({data}: {data: UserItems}) => {
  const {styles, theme} = useStyles(stylesheet);

  const openProfileLink = useCallback(() => {
    Linking.openURL(data?.html_url);
  }, [data?.html_url]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <FastImage
            style={styles.avatar}
            source={{
              uri: data?.avatar_url,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
            {data?.login}
          </Text>
        </View>
        <Text style={{color: theme.colors.black}}>{data.id}</Text>
        <TouchableOpacity style={styles.center} onPress={openProfileLink}>
          <Icons name={'open-in-new'} color={theme.colors.gray} size={30} />
          <Text style={{color: theme.colors.blue}}>Github Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    height: 'auto',
    alignItems: 'flex-start',
    marginVertical: 5,
    padding: 10,
    backgroundColor: theme.colors.tabBar,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: runtime.screen.width - 40,
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
  },
  text: {
    fontSize: theme.fonts.neutral,
    color: theme.colors.black,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: runtime.screen.width / 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
}));

export default memo(ListCard);
