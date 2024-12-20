import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from './root-navigator';

const topics = [
  {
    id: 1,
    title: 'Flat list demo',
    screen: 'FlatlistScreen',
  },
  {
    id: 2,
    title: 'Section flat list demo',
    screen: 'SectionListScreen',
  },
  {
    id: 3,
    title: 'Touchable screen ',
    screen: 'TouchableScreen',
  },
  {
    id: 4,
    title: 'Modal screen ',
    screen: 'ModalScreen',
  },
  {
    id: 5,
    title: 'Poll to refresh screen ',
    screen: 'PooltoRefreshScreen',
  },
];
type HomeScreenProps = StackNavigationProp<StackParamList, 'Home'>;

export default function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenProps;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Flat List types </Text>
      <FlatList
        data={topics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() =>
              navigation.navigate(item.screen as keyof StackParamList)
            }>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    color: '#2828df',
    fontWeight: '700',
  },
  btnStyle: {
    backgroundColor: '#2f9ffa',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  topicText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
