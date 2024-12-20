import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type props = {
  id: number;
  title: string;
  subHeading: string;
  description: string;
};

const PoolListItem = ({item}: {item: props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <Text style={styles.num}>{item.id}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subHeading}>{item.subHeading}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'gray',
    shadowRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'baseline',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  count: {
    backgroundColor: '#3c8ffd',
    width: 40,
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5a57f8',
    textDecorationLine: 'underline',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: 'gray',
    marginTop: 10,
  },
});
export default PoolListItem;
