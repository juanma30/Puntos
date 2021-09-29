import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';

export default () => {
  return  (
    <Modal
      animationType='slide'
      transparent={true}
      visible={false}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>:)</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
});
