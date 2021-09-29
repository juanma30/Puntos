import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default () => {
  return  (
      <View style={styles.panel}>
        <Button style={styles.button} title='Lista'/>
        <Button style={styles.button} title='Mostrar/Ocultar'/>
      </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 50,
  },
  panel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
