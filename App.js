import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Map, ModalView, Panel } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const handleLongPress = ({ nativeEvent }) => {
    const newPuntos = puntos.concat({ coordinate: nativeEvent.coordinate })
    setPuntos(newPuntos)
  }

  console.log(puntos);

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <ModalView />
      <Panel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
