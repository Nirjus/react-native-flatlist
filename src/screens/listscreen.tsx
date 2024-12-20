import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ListItem from '../components/listItem';
import {mockListData} from '../components/mock-list-data';

export default function FlatelistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flatelist Example</Text>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.flatListheader}>FlatList Header</Text>
        }
        ListFooterComponent={
          <Text style={styles.flatListfooter}>FlatList Footer</Text>
        }
        data={mockListData}
        renderItem={({item}) => <ListItem item={item} key={item.id} />}
        keyExtractor={item => item.id}
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
});
