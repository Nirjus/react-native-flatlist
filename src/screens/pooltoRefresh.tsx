import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {mockPoolData} from '../components/mock-list-data';
import PoolListItem from '../components/poolList';

export default function PooltoRefreshScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(mockPoolData);
  const [loading, setLoading] = useState(false);

  const loadMoreMethod = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        const newItem = Array.from({length: 10}, (_, index) => ({
          id: index + data.length + 1,
          title: `Item number ${index + data.length + 1}`,
          subHeading: `This is our sub heading of the the ${
            index + data.length + 1
          }th element`,
          description: `Description of the new element containing ${
            index + data.length + 1
          } th element, read below`,
        }));
        setData([...data, ...newItem]);
        setLoading(false);
      }, 1000);
    }
  };
  const handleOnRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(mockPoolData);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flatelist Example</Text>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.flatListheader}>FlatList Header</Text>
        }
        ListFooterComponent={
          loading ? (
            <ActivityIndicator
              size={'large'}
              style={styles.loader}
              color={'#3584df'}
            />
          ) : (
            <Text style={styles.flatListfooter}>FlatList Footer</Text>
          )
        }
        data={data}
        renderItem={({item}) => <PoolListItem item={item} key={item.id} />}
        onEndReached={loadMoreMethod}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListheader: {
    fontSize: 25,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  flatListfooter: {
    fontSize: 25,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: 'blue',
  },
  loader: {
    marginVertical: 20,
  },
});
