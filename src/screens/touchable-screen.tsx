import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

const TouchableScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TouchableScreen</Text>

      <TouchableWithoutFeedback onPress={() => setCount(prev => prev + 1)}>
        <View style={styles.btnStyle}>
          <Text style={styles.btntext}> Touchbale without feedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable
        style={({pressed}) => [
          styles.btnStyle,
          {
            backgroundColor: pressed ? '#8082ff' : '#e34e34',
          },
        ]}>
        {({pressed}) => (
          <Text
            style={[styles.btntext, {color: pressed ? '#f17aa8' : '#23f123'}]}>
            {pressed ? 'Pressed now' : 'Pressable'}
          </Text>
        )}
      </Pressable>
      <Text style={styles.countText}> count: {count}</Text>
    </View>
  );
};

export default TouchableScreen;

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
  btnStyle: {
    padding: 10,
    backgroundColor: '#fd7fbe',
    borderRadius: 8,
    marginVertical: 15,
  },
  btntext: {
    textAlign: 'center',
    color: 'white',
  },
  countText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
