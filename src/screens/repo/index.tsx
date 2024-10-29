import React, {useCallback, useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import SearchIcon from '@app/assets/icons/search.svg';
import CleanSearchIcon from '@app/assets/icons/cleanSearch.svg';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import {useInfiniteQuery} from '@tanstack/react-query';
import {ListComponent} from '@app/components/listComponent';
import {queryClient} from '@app/config/queryClient';
import getRepoData from '@app/functions/getRepoData';

const RepoScreen = () => {
  const [search, setsearch] = useState<string>('');
  const [searchText, setsearchText] = useState<string>('');
  const searchRef = useRef<TextInput>(null);
  const {styles, theme} = useStyles(stylesheet);
  const timeout = useRef<string | number | any | undefined>(null);

  const {data, refetch, isFetching, fetchNextPage, isFetchingNextPage} =
    useInfiniteQuery({
      queryKey: ['repositories', searchText],
      queryFn: ({pageParam}) => getRepoData(pageParam, searchText),
      initialPageParam: 1,
      staleTime: 30000,
      getNextPageParam: (_, __, page) => {
        return page + 1;
      },
    });

  const cleanSearch = useCallback(() => {
    setsearch('');
    setsearchText('');
    resetInfiniteQueryPagination(['repositories', searchText]);
  }, [searchText]);
  const onSearch = useCallback(
    (text: string) => {
      clearTimeout(timeout.current);
      setsearch(text);
      timeout.current = setTimeout(() => {
        if (text.length > 2) {
          resetInfiniteQueryPagination(['repositories', searchText]);
          setsearchText(text);
        } else {
          setsearchText('');
        }
      }, 500);
    },
    [searchText],
  );

  const resetInfiniteQueryPagination = (querykey: [string, string]) => {
    queryClient.setQueryData(querykey, (oldData: any) => {
      if (!oldData) {
        return undefined;
      }
      return {
        ...oldData,
        pages: oldData.pages.slice(0, 1),
        pageParams: oldData.pageParams.slice(0, 1),
      };
    });
  };

  const refresh = useCallback(() => {
    resetInfiniteQueryPagination(['repositories', searchText]);
    refetch();
  }, [refetch, searchText]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TouchableOpacity
          style={styles.touchableIconSearch}
          onPress={() => searchRef?.current?.focus()}>
          <SearchIcon />
        </TouchableOpacity>
        <TextInput
          testID="textInputTest"
          ref={searchRef}
          style={styles.textInput}
          placeholder="Search github repositories"
          placeholderTextColor={theme.colors.gray}
          value={search}
          onChangeText={onSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity
            style={styles.touchableIconSearch}
            onPress={cleanSearch}>
            <CleanSearchIcon />
          </TouchableOpacity>
        )}
      </View>
      <ListComponent
        data={data?.pages}
        loading={isFetching}
        loadingMore={isFetchingNextPage}
        handleMore={fetchNextPage}
        refresh={refresh}
        repositories
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme, runtime) => ({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInputContainer: {
    height: runtime.screen.height * 0.06,
    marginTop: 45,
    borderRadius: 8,
    flexDirection: 'row',
    width: runtime.screen.width * 0.96,
    backgroundColor: theme.colors.searchBar,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: theme.colors.black,
    fontSize: theme.fonts.neutral,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  touchable: {
    width: runtime.screen.width * 0.25,
    borderRadius: 10,
  },
  touchableIconSearch: {
    alignSelf: 'center',
  },
}));

export default RepoScreen;
