import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';

export default function ModalScreen() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modal Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowModal(!showModal)}>
        <Text style={styles.btnText}>Open Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowModal(!showModal)}>
              <Text style={styles.btnText}>Close Modal</Text>
            </TouchableOpacity>
            <Text>Wassp</Text>
          </View>
        </View>
      </Modal>
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
  btn: {
    padding: 15,
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 50,
    marginVertical: 10,
    backgroundColor: '#8f8f8f',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 35,
    shadowColor: 'black',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
