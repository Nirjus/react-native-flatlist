import {View, Text, SectionList, StyleSheet} from 'react-native';
import React from 'react';
import {sectionListData} from '../components/mock-list-data';

const ScectionListScreen: React.FC = () => {
  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scection List Screen</Text>
      <SectionList
        sections={sectionListData}
        renderSectionHeader={renderSectionHeader}
        renderItem={({item, index}) => <SectionItem item={item} key={index} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const SectionItem = ({item}: {item: string}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}> {item}</Text>
    </View>
  );
};
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f7dbdb',
    backgroundColor: '#e0e0e0',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  itemText: {
    fontStyle: 'italic',
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
export default ScectionListScreen;
