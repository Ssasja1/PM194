// Zona 1: Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [ contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizarTexto = () => {setContenido('Estado actualizado del Text')};
  return (
    <Text onPress={actualizarTexto}> {contenido}</Text>
  )
};

const TextoBoton = () => {
  const [ contenido, setContenido] = useState('Hola Mundo RNative');
  const actualizarTexto = () => {setContenido('Estado actualizado del Text')};
  return (
    <Button title={contenido} onPress={actualizarTexto}> </Button>
  )
};

// Zona 2: Main - Ejecucion
//Si se quiere poner info, debe estar dentro de un view
export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
       <Texto></Texto>
        <Texto></Texto>
      <TextoBoton title='Haber'></TextoBoton>
      <StatusBar style="auto" />
    </View>
  );
}

// Zona 3: Estetica del screen, esto es la version de css de react native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
