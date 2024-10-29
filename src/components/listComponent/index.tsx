import {FlashList} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import {RefreshControl, View} from 'react-native';
import {EmptyComponent} from '../emptyComponent';
import LoadingComponent from '../loadingComponent';
import Margin from '../margin';
import {
  createStyleSheet,
  UnistylesRuntime,
  useStyles,
} from 'react-native-unistyles';
import {RepoItems, UserItems} from '@app/types/response';
import ListFooterComponent from '../listFooterComponent';
import ListCard from '../listCard';
import ListRepoCard from '../listRepoCard';

export const ListComponent = ({
  data,
  loading,
  loadingMore,
  handleMore,
  refresh,
  repositories,
}: {
  data: Response[]| any;
  loading: boolean;
  loadingMore: boolean;
  handleMore: () => void;
  refresh: () => void;
  repositories?: boolean;
}) => {
  const {styles} = useStyles(stylesheet);
  const {height, width} = UnistylesRuntime.screen;
  let total = 0;
  const dataR = data?.map((item: any) => {
    total = item.total_count;
    if (item.items) {
      return item.items;
    } else {
      return [];
    }
  });

  const renderItem = useCallback(
    ({item}: {item: UserItems | RepoItems}) => {
      return repositories ? (
        <ListRepoCard data={item as RepoItems} />
      ) : (
        <ListCard data={item as UserItems} />
      );
    },
    [repositories],
  );

  const keyExtractor = useCallback(
    (item: UserItems) => item?.id.toString(),
    [],
  );
  return (
    <View style={styles.scrollviewStyle}>
      {dataR?.flat()?.length > 0 && (loadingMore || !loading) ? (
        <FlashList
          renderItem={renderItem}
          estimatedItemSize={repositories ? 170 : 86}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refresh} />
          }
          contentContainerStyle={styles.padding}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          estimatedListSize={{height: height - 100, width: width - 16}}
          data={dataR?.flat()}
          ListEmptyComponent={EmptyComponent}
          keyExtractor={keyExtractor}
          onEndReached={
            total > 25 && dataR?.flat()?.length < total ? handleMore : () => {}
          }
          ListFooterComponent={
            total > 25 && dataR?.flat()?.length < total ? (
              <ListFooterComponent />
            ) : (
              () => null
            )
          }
        />
      ) : !loading ? (
        <>
          <Margin top={height / 7} />
          <EmptyComponent />
        </>
      ) : (
        <LoadingComponent />
      )}
    </View>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  scrollviewStyle: {
    flex: 1,
    width: runtime.screen.width - 16,
    marginTop: 16,
  },
  padding: {
    paddingBottom: 20,
  },
}));
