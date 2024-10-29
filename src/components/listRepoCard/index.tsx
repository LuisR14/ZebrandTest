import {RepoItems} from '@app/types/response';
import React, {memo, useCallback} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Margin from '../margin';
import formatNUmber from '@app/utils/formatNumber';

const ListRepoCard = ({data}: {data: RepoItems}) => {
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
              uri: data?.owner?.avatar_url,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
              {data?.full_name}
            </Text>
            <View style={styles.starsInfo}>
              <Icons name={'star-box'} color={theme.colors.gray} size={25} />
              <Text style={styles.startText}>
                {formatNUmber(data?.stargazers_count)}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.center} onPress={openProfileLink}>
          <Icons name={'open-in-new'} color={theme.colors.gray} size={30} />
          <Text style={{color: theme.colors.blue}}>Github Profile</Text>
        </TouchableOpacity>
      </View>
      <Margin bottom={10} />
      <Text style={styles.descriptionText}>{data.description}</Text>
      <View style={styles.homeCenter}>
        <TouchableOpacity style={styles.center} onPress={openProfileLink}>
          <Icons name={'home'} color={theme.colors.gray} size={30} />
          <Text style={{color: theme.colors.blue}}>homepage</Text>
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
  homeCenter: {
    alignItems: 'center',
    width: runtime.screen.width - 20,
  },
  starsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
  },
  text: {
    fontSize: theme.fonts.neutral,
    color: theme.colors.black,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  descriptionText: {
    fontSize: theme.fonts.normal,
    fontWeight: '400',
    marginHorizontal: 10,
  },
  startText: {
    fontSize: theme.fonts.normal,
    fontWeight: '400',
    marginHorizontal: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: runtime.screen.width / 1.5,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: runtime.screen.width,
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
}));

export default memo(ListRepoCard);
