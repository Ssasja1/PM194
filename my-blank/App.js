/* Zona 1: Importaciones */
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, Button } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const simularCarga = () => {
    setLoading(true);
    setMensaje('');
    setTimeout(() => {
      setLoading(false);
      setMensaje('¡Carga completa!');
    }, 3000); // Simula una carga de 3 segundos
  };


return(
  <View style={styles.container}>
    <Text style={styles.title}>
      Carga 
    </Text>

    {loading ? (
      <>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style = {styles.texto}>Cargando...</Text>
      </>
      ) : (
        <>
        <Button title="Iniciar Carga" onPress={simularCarga}></Button>
        {mensaje ? <Text style={styles.texto}>{mensaje}</Text> : null}

        </>)}

  </View>
)
}

// 4. Estilos simples
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)', // overlay semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
texto: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
});